/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FieldErrors, useForm } from "react-hook-form";
import {
  camelCaseToTitleCase,
  capitalizeFirstLetter,
} from "../../../helper/populateString";
import { setSnackbar } from "../../../store/slice/components/reducer/snackbar";
import { useAppDispatch, useAppSelector } from "../../../store";
import { ComponentFormType } from "../../../components/Forms/enum/ComponentFormType.enum";
import { FormType } from "../../../components/Forms/type/FormType.type";
import { CreateOrUpdateType } from "../../../components/SelectInputDialog/type/CreateOrUpdateType.type";
import {
  MethodType,
  SelectInputDialogType,
} from "../../../components/SelectInputDialog/enum/SelectInputDialogType.type";
import { PageVendorListReducerInterface } from "../../../store/slice/page/vendor/interface/PageVendorReducerInterface.interface";
import { CreateVendorFormsType } from "./type/CreateVendorFormsType.type";
import { CreateVendorFormsSchema } from "./schema/CreateVendorFormsSchema.schema";
import SelectForm from "../../../components/Forms/SelectForm";
import SelectDialogForm from "../../../components/Forms/SelectDialogForm";
import { createVendor } from "../../../store/slice/page/vendor/action/createVendor";
import { getVendors } from "../../../store/slice/page/vendor/action/getVendors";
import { updateVendor } from "../../../store/slice/page/vendor/action/updateVendor";
import MaxHeightTextarea from "../../../components/Forms/TextArea";

const VendorCreateAndUpdateDialog = (props: {
  open: boolean;
  closeEvent: () => void;
  methodType: CreateOrUpdateType;
  populate?: PageVendorListReducerInterface;
}) => {
  const dispatch = useAppDispatch();
  const { selectInputOptions } = useAppSelector((state) => state.components);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const defaultValues: CreateVendorFormsType = JSON.parse(
    JSON.stringify(CreateVendorFormsSchema)
  );
  const form = useForm<CreateVendorFormsType>({
    defaultValues: async () => {
      if (props.methodType === MethodType.UPDATE) {
        defaultValues.vendorData.name.value = props.populate?.name ?? "";
        defaultValues.vendorData.vendorType.value =
          props.populate?.vendorType.name ?? "";
        defaultValues.vendorData.activated.value = props.populate?.isActive
          ? "active"
          : "inactive";
        defaultValues.detailInformation.email.value =
          props.populate?.email ?? "";
        defaultValues.detailInformation.phone.value =
          props.populate?.phone ?? "";
        defaultValues.detailInformation.address.value =
          props.populate?.address ?? "";
      }

      return defaultValues;
    },
  });
  const { register, handleSubmit, formState, control, setValue, clearErrors } =
    form;
  const { errors } = formState;
  const [submit, setSubmit] = useState<{ loading: boolean }>({
    loading: false,
  });

  const onValid = (data: CreateVendorFormsType) => {
    console.log("VALID", { data });
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("page") || "1", 10);
    setSubmit({ loading: true });
    const _payload = {
      name: data.vendorData.name.value.toString(),
      isActive: data.vendorData.activated.value === "active" ? true : false,
      address: data.detailInformation.address.value.toString(),
      email: data.detailInformation.email.value.toString(),
      phone: data.detailInformation.phone.value.toString(),
      vendorTypeId: !selectInputOptions.vendorType.loading
        ? selectInputOptions.vendorType.list.filter(
            (list) => list.name === data.vendorData.vendorType.value
          )[0].id
        : props.populate?.vendorType.id ?? "",
    };
    switch (props.methodType) {
      case MethodType.UPDATE:
        return dispatch(
          updateVendor({
            data: { ..._payload, id: props.populate?.id ?? "" },
            successCB: () => {
              props.closeEvent();
              dispatch(getVendors({ page }));
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
      default:
        return dispatch(
          createVendor({
            data: _payload,
            successCB: () => {
              props.closeEvent();
              dispatch(getVendors({ page }));
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
    }
  };

  const onError = (errors: FieldErrors<CreateVendorFormsType>) => {
    console.log("ERROR", { errors, form });
    dispatch(
      setSnackbar({
        open: true,
        autoHideDuration: 2000,
        severity: "warning",
        message: "Please make sure all forms to be filled",
      })
    );
  };
  return (
    <>
      <Dialog
        component="form"
        id={`vendor-create-dialog`}
        // noValidate
        onSubmit={handleSubmit(onValid, onError)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"md"}
        onClose={() => {}}
        aria-labelledby="vendor-create-dialog"
        disableEscapeKeyDown={true}
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {`${capitalizeFirstLetter(props.methodType)} vendor`}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.closeEvent}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ pb: "45px" }}>
          <Box sx={{ mt: 1 }}>
            {Object.keys(defaultValues).map((section, sectionIndex) => {
              const _getSection =
                defaultValues[section as keyof typeof defaultValues];
              return (
                <Box key={sectionIndex} sx={{ mb: 5 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {camelCaseToTitleCase(section)}
                  </Typography>
                  {Object.keys(_getSection).map((field, fieldIndex) => {
                    const _getField: FormType =
                      _getSection[field as keyof typeof _getSection];
                    const _registerField = `${section}.${field}.value` as any;
                    const _errors =
                      errors[section as keyof typeof defaultValues]?.[
                        field as keyof typeof _getSection
                      ];

                    switch (_getField.componentType) {
                      case ComponentFormType.INPUT_DROPDOWN:
                        return (
                          <SelectForm
                            key={fieldIndex}
                            name={_getField.name}
                            registerField={_registerField}
                            id={_getField.id}
                            label={_getField.label}
                            required={_getField.required}
                            control={control}
                            error={_errors ? true : false}
                            helperText={_getField.errorMessage}
                            value={_getField.value as string}
                            style={{
                              marginLeft: fieldIndex % 2 === 0 ? 0 : 3,
                              width: fieldIndex % 2 === 0 ? "50%" : "47%",
                            }}
                            options={_getField.options}
                            disabled={_getField.disabled}
                          />
                        );
                      case ComponentFormType.INPUT_SELECT_MODAL:
                        return (
                          <SelectDialogForm
                            key={fieldIndex}
                            name={_getField.name}
                            registerField={_registerField}
                            id={_getField.id}
                            label={_getField.label}
                            required={_getField.required}
                            value={_getField.value as string}
                            error={_errors ? true : false}
                            control={control}
                            helperText={_getField.errorMessage}
                            style={{
                              marginLeft: fieldIndex % 2 === 0 ? 0 : 3,
                              width: fieldIndex % 2 === 0 ? "50%" : "47%",
                            }}
                            disabled={_getField.disabled}
                            onSelect={(val) => {
                              setValue(_registerField, val);
                              clearErrors(_registerField);
                            }}
                            SelectInputDialogType={
                              _getField.SelectInputDialogType ??
                              SelectInputDialogType.DEPARTEMENT
                            }
                          />
                        );
                      case ComponentFormType.INPUT_TEXT_AREA:
                        return (
                          <MaxHeightTextarea
                            key={fieldIndex}
                            name={_getField.name}
                            registerField={_registerField}
                            id={_getField.id}
                            label={_getField.label}
                            required={_getField.required}
                            control={control}
                            error={_errors ? true : false}
                            helperText={_getField.errorMessage}
                            value={_getField.value as string}
                            style={{
                              marginLeft: fieldIndex % 2 === 0 ? 0 : 3,
                              width: fieldIndex % 2 === 0 ? "50%" : "47%",
                            }}
                            options={_getField.options}
                            disabled={_getField.disabled}
                          />
                        );
                      default:
                        return (
                          <TextField
                            key={fieldIndex}
                            margin="normal"
                            sx={{
                              ml: {
                                xs: 0,
                                md: fieldIndex % 2 === 0 ? 0 : 3,
                              },
                              width: {
                                xs: "100%",
                                md: fieldIndex % 2 === 0 ? "50%" : "47%",
                              },
                            }}
                            fullWidth={_getField.fullWidth}
                            label={`${_getField.label}${
                              _getField.required ? "*" : ""
                            }`}
                            type={_getField.type}
                            autoFocus={_getField.autoFocus}
                            autoComplete={_getField.autoComplete}
                            {...register(_registerField, {
                              required: {
                                value: _getField.required,
                                message: _getField.errorMessage,
                              },
                              disabled: _getField.disabled,
                              pattern: {
                                value: _getField.validate.pattern.value,
                                message: _getField.validate.pattern.message,
                              },
                            })}
                            error={!!_errors}
                            helperText={_errors?.["value"]?.["message"] ?? ""}
                          />
                        );
                    }
                  })}
                </Box>
              );
            })}
          </Box>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            loading={false}
            disabled={submit.loading}
            variant="outlined"
            size="medium"
            onClick={props.closeEvent}
          >
            <Typography variant="button" display="block" gutterBottom>
              Cancel
            </Typography>
          </LoadingButton>
          <LoadingButton
            type="submit"
            loading={submit.loading}
            disabled={submit.loading}
            variant="contained"
            size="medium"
          >
            <Typography variant="button" display="block" gutterBottom>
              {props.methodType}
            </Typography>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

const MemoizedVendorCreateAndUpdateDialog = React.memo(
  VendorCreateAndUpdateDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedVendorCreateAndUpdateDialog;
