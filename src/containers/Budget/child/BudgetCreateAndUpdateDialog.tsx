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
import { useAppDispatch } from "../../../store";
import { ComponentFormType } from "../../../components/Forms/enum/ComponentFormType.enum";
import { FormType } from "../../../components/Forms/type/FormType.type";
import { CreateOrUpdateType } from "../../../components/SelectInputDialog/type/CreateOrUpdateType.type";
import { MethodType } from "../../../components/SelectInputDialog/enum/SelectInputDialogType.type";
import MaxHeightTextarea from "../../../components/Forms/TextArea";
import { CreateBudgetFormsSchema } from "./schema/CreateBudgetFormsSchema.schema";
import { CreateBudgetFormsType } from "./type/CreateBudgetFormsType.type";
import { createBudget } from "../../../store/slice/page/budget/action/createBudget";
import { getBudgets } from "../../../store/slice/page/budget/action/getBudgets";
import NumberFormat from "../../../components/Forms/NumberFormat";
import { PageBudgetListReducerInterface } from "../../../store/slice/page/budget/interface/PageBudgetReducerInterface.interface";
import { updateBudget } from "../../../store/slice/page/budget/action/updateBudget";

const BudgetCreateAndUpdateDialog = (props: {
  open: boolean;
  closeEvent: () => void;
  methodType: CreateOrUpdateType;
  populate?: PageBudgetListReducerInterface;
}) => {
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const dispatch = useAppDispatch();
  // const { selectInputOptions } = useAppSelector((state) => state.components);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const defaultValues: CreateBudgetFormsType = JSON.parse(
    JSON.stringify(CreateBudgetFormsSchema)
  );
  const form = useForm<CreateBudgetFormsType>({
    defaultValues: async () => {
      if (props.methodType === MethodType.UPDATE) {
        defaultValues.budgetData.name.value = props.populate?.name ?? "";
        defaultValues.detailInformation.cost.value = props.populate?.cost ?? "";
        defaultValues.detailInformation.information.value =
          props.populate?.information ?? "";
      }

      return defaultValues;
    },
  });
  const {
    register,
    handleSubmit,
    formState,
    control,
    getValues,
    clearErrors,
    setError,
  } = form;
  const { errors } = formState;
  const [submit, setSubmit] = useState<{ loading: boolean }>({
    loading: false,
  });

  const onValid = (data: CreateBudgetFormsType) => {
    setSubmit({ loading: true });
    const _payload = {
      name: data.budgetData.name.value.toString(),
      isDraft: false,
      cost: data.detailInformation.cost.value.toString(),
      information: data.detailInformation.information.value.toString(),
    };
    switch (props.methodType) {
      case MethodType.UPDATE:
        return dispatch(
          updateBudget({
            data: {
              ..._payload,
              id: props.populate?.id ?? "",
            },
            successCB: () => {
              props.closeEvent();
              dispatch(getBudgets({ page }));
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
      default:
        return dispatch(
          createBudget({
            data: _payload,
            successCB: () => {
              props.closeEvent();
              dispatch(getBudgets({ page }));
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onError = (_errors: FieldErrors<CreateBudgetFormsType>) => {
    return showWarningNotif("Please make sure all forms to be filled");
  };

  const showWarningNotif = (msg: string) => {
    dispatch(
      setSnackbar({
        open: true,
        autoHideDuration: 2000,
        severity: "warning",
        message: msg,
      })
    );
  };

  const handleSaveAsDraft = () => {
    if (getValues("budgetData.name.value") === "") {
      setError("budgetData.name.value", {
        type: "required",
        message: "name required",
      });
      return showWarningNotif("Save as draft, min type budget name");
    }

    clearErrors();
    setSubmit({ loading: true });
    dispatch(
      createBudget({
        data: {
          name: getValues("budgetData.name.value").toString(),
          cost: getValues("detailInformation.cost.value").toString(),
          information: getValues(
            "detailInformation.information.value"
          ).toString(),
          isDraft: true,
        },
        successCB: () => {
          props.closeEvent();
          dispatch(getBudgets({ page }));
        },
        failedCB: () => {
          setSubmit({ loading: false });
        },
      })
    );
  };

  return (
    <>
      <Dialog
        component="form"
        id={`budget-create-dialog`}
        // noValidate
        onSubmit={handleSubmit(onValid, onError)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"sm"}
        onClose={() => {}}
        aria-labelledby="budget-create-dialog"
        disableEscapeKeyDown={true}
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {`${capitalizeFirstLetter(props.methodType)} budget`}
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
                      case ComponentFormType.INPUT_NUMBER_FORMAT:
                        return (
                          <NumberFormat
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
                              marginLeft: 0,
                              width: "100%",
                            }}
                            disabled={_getField.disabled}
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
                            value={_getField.value.toString()}
                            style={{
                              marginLeft: 0,
                              width: "100%",
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
                                md: 0,
                              },
                              width: {
                                xs: "100%",
                                md: "100%",
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
          {props.methodType === MethodType.CREATE && (
            <LoadingButton
              loading={submit.loading}
              disabled={submit.loading}
              onClick={handleSaveAsDraft}
              variant="outlined"
              size="medium"
            >
              <Typography variant="button" display="block" gutterBottom>
                Save as Draft
              </Typography>
            </LoadingButton>
          )}
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

const MemoizedBudgetCreateAndUpdateDialog = React.memo(
  BudgetCreateAndUpdateDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedBudgetCreateAndUpdateDialog;
