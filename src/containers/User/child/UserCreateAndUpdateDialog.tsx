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
import { CreateUserFormsSchema } from "./schema/CreateUserFormsSchema.schema";
import { FieldErrors, useForm } from "react-hook-form";
import { CreateUserFormsType } from "./type/CreateUserFormsType.type";
import {
  camelCaseToTitleCase,
  capitalizeFirstLetter,
} from "../../../helper/populateString";
import { setSnackbar } from "../../../store/slice/components/reducer/snackbar";
import { useAppDispatch, useAppSelector } from "../../../store";
import SelectDialogForm from "../../../components/Forms/SelectDialogForm";
import SelectForm from "../../../components/Forms/SelectForm";
import { ComponentFormType } from "../../../components/Forms/enum/ComponentFormType.enum";
import { FormType } from "../../../components/Forms/type/FormType.type";
import { CreateOrUpdateType } from "../../../components/SelectInputDialog/type/CreateOrUpdateType.type";
import {
  MethodType,
  SelectInputDialogType,
} from "../../../components/SelectInputDialog/enum/SelectInputDialogType.type";
import { createUser } from "../../../store/slice/page/user/action/createUser";
import { updateUser } from "../../../store/slice/page/user/action/updateUser";
import { PageUserListReducerInterface } from "../../../store/slice/page/user/interface/PageUserReducerInterface.interface";
import { getUsers } from "../../../store/slice/page/user/action/getUsers";

const UserCreateAndUpdateDialog = (props: {
  open: boolean;
  closeEvent: () => void;
  methodType: CreateOrUpdateType;
  populate?: PageUserListReducerInterface;
}) => {
  const [submit, setSubmit] = useState<{ loading: boolean }>({
    loading: false,
  });
  const { selectInputOptions } = useAppSelector((state) => state.components);
  const dispatch = useAppDispatch();
  const defaultValues: CreateUserFormsType = JSON.parse(
    JSON.stringify(CreateUserFormsSchema)
  );
  const form = useForm<CreateUserFormsType>({
    defaultValues: async () => {
      if (props.methodType === MethodType.UPDATE) {
        defaultValues.personalData.email.value = props.populate?.email || "";
        defaultValues.personalData.nik.value = props.populate?.nik || "";
        defaultValues.personalData.name.value = props.populate?.name || "";
        defaultValues.personalData.gender.value = props.populate?.gender || "";
        defaultValues.personalData.activated.value =
          props.populate?.isActive || false ? "active" : "inactive";
        defaultValues.detailInformation.role.value =
          props.populate?.role.name ?? "";
        defaultValues.detailInformation.departement.value =
          props.populate?.departement.name ?? "";
        defaultValues.detailInformation.division.value =
          props.populate?.division.name ?? "";
        defaultValues.detailInformation.position.value =
          props.populate?.position.name ?? "";
        defaultValues.detailInformation.level.value =
          props.populate?.level.name ?? "";
      }

      return defaultValues;
    },
  });
  const { register, handleSubmit, formState, control, setValue, clearErrors } =
    form;
  const { errors } = formState;

  const onValid = (data: CreateUserFormsType) => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("page") || "1", 10);
    setSubmit({ loading: true });
    const _payload = {
      name: data.personalData.name.value.toString(),
      nik: data.personalData.nik.value.toString(),
      email: data.personalData.email.value.toString(),
      gender: data.personalData.gender.value.toString(),
      isActive: data.personalData.activated.value === "active" ? true : false,
      roleId: !selectInputOptions.role.loading
        ? selectInputOptions.role.list.filter(
            (list) => list.name === data.detailInformation.role.value
          )[0].id
        : props.populate?.role.id ?? "",
      departementId: !selectInputOptions.departement.loading
        ? selectInputOptions.departement.list.filter(
            (list) => list.name === data.detailInformation.departement.value
          )[0].id
        : props.populate?.departement.id ?? "",
      divisionId: !selectInputOptions.division.loading
        ? selectInputOptions.division.list.filter(
            (list) => list.name === data.detailInformation.division.value
          )[0].id
        : props.populate?.division.id ?? "",
      positionId: !selectInputOptions.position.loading
        ? selectInputOptions.position.list.filter(
            (list) => list.name === data.detailInformation.position.value
          )[0].id
        : props.populate?.position.id ?? "",
      levelId: !selectInputOptions.level.loading
        ? selectInputOptions.level.list.filter(
            (list) => list.name === data.detailInformation.level.value
          )[0].id
        : props.populate?.level.id ?? "",
    };
    switch (props.methodType) {
      case MethodType.UPDATE:
        return dispatch(
          updateUser({
            data: { ..._payload, id: props.populate?.id || "" },
            successCB: () => {
              props.closeEvent();
              dispatch(getUsers({ page }));
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
      default:
        return dispatch(
          createUser({
            data: _payload,
            successCB: () => {
              props.closeEvent();
              dispatch(getUsers({ page }));
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
    }
  };

  const onError = (errors: FieldErrors<CreateUserFormsType>) => {
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

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Dialog
        component="form"
        id={`user-create-dialog`}
        // noValidate
        onSubmit={handleSubmit(onValid, onError)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"md"}
        onClose={() => {}}
        aria-labelledby="user-create-dialog"
        disableEscapeKeyDown={true}
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {`${capitalizeFirstLetter(props.methodType)} User`}
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
                            value={_getField.value.toString()}
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
                            value={_getField.value.toString()}
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
                              _getField.SelectInputDialogType ||
                              SelectInputDialogType.DEPARTEMENT
                            }
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

const MemoizedUserCreateAndUpdateDialog = React.memo(
  UserCreateAndUpdateDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedUserCreateAndUpdateDialog;
