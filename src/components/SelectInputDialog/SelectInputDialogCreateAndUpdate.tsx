/* eslint-disable @typescript-eslint/no-explicit-any */
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton";
import { SelectInputDialogTypes } from "./type/SelectInputDialogTypes.type";
import { selectInputDialogTypeGenerate } from "./helper/selectInputDialogTypeGenerate";
import { SelectInputDialogFormsType } from "./type/SelectInputDialogFormsType.type";
import { FieldErrors, useForm } from "react-hook-form";
import { SelectInputDialogFormsSchema } from "./schema/SelectInputDialogFormsSchema.schema";
import Box from "@mui/material/Box";
import { FormType } from "../Forms/type/FormType.type";
import TextField from "@mui/material/TextField";
import { createPortal } from "react-dom";
import { capitalizeFirstLetter } from "../../helper/populateString";
import { setSnackbar } from "../../store/slice/components/reducer/snackbar";
import { useAppDispatch } from "../../store";
import { addSelectInputOptions } from "../../store/slice/components/actions/addSelectInputOptions";
import { CreateOrUpdateType } from "./type/CreateOrUpdateType.type";
import { MethodType } from "./enum/SelectInputDialogType.type";
import { updateSelectInputOption } from "../../store/slice/components/actions/updateSelectInputOptions";

const SelectInputDialogCreateAndUpdate = (props: {
  open: boolean;
  backEvent: () => void;
  type: SelectInputDialogTypes;
  methodType: CreateOrUpdateType;
  populate?: {
    name: string;
    id: string;
  };
}) => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const _isType = selectInputDialogTypeGenerate(props.type);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const defaultValues = SelectInputDialogFormsSchema;
  const form = useForm<SelectInputDialogFormsType>({
    defaultValues: async () => {
      defaultValues.name.value = props.populate?.name ?? "";
      return defaultValues;
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onValid = (data: SelectInputDialogFormsType) => {
    console.log("SUBMIT", { data, errors });
    setSubmitLoading(true);
    switch (props.methodType) {
      case MethodType.UPDATE:
        return dispatch(
          updateSelectInputOption({
            type: props.type,
            id: props.populate?.id || "",
            name: data.name.value.toString(),
            successCB: props.backEvent,
          })
        );

      default:
        return dispatch(
          addSelectInputOptions({
            type: props.type,
            forms: data,
            successCB: props.backEvent,
            failedCB: () => {
              setSubmitLoading(false);
            },
          })
        );
    }
  };

  const onError = (errors: FieldErrors<SelectInputDialogFormsType>) => {
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
  const handleSubmitWithoutPropagation = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit(onValid, onError)(e);
  };
  return (
    <ModalPortal>
      <Dialog
        component="form"
        id={`${_isType}-create-dialog`}
        onSubmit={handleSubmitWithoutPropagation}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"sm"}
        onClose={() => {}}
        aria-labelledby="user-create-dialog"
        disableEscapeKeyDown={true}
        open={props.open}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              disabled={submitLoading}
              onClick={props.backEvent}
              aria-label="close"
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {`Add New ${_isType}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers sx={{ height: "350px" }}>
          <Box sx={{ mt: 1 }}>
            {Object.keys(defaultValues).map((field, fieldIndex) => {
              const _getField: FormType =
                defaultValues[field as keyof typeof defaultValues];
              const _registerField = `${field}.value` as any;
              const _errors = errors[field as keyof typeof defaultValues];
              const _label = `${capitalizeFirstLetter(_isType)} ${
                _getField.label
              }`;
              switch (_getField.componentType) {
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
                      label={`${_label} ${_getField.required ? " *" : ""}`}
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
                        // validate: {
                        //   mustBeCapital: (fieldValue) => {
                        //     if (field !== 'name') return;
                        //     return (
                        //       _getField.validate.other[0].value.test(
                        //         fieldValue
                        //       ) ||
                        //       `${capitalizeFirstLetter(_isType)} ${field} ${
                        //         _getField.validate.other[0].message
                        //       }`
                        //     );
                        //   },
                        // },
                      })}
                      error={!!_errors}
                      helperText={_errors?.["value"]?.["message"] ?? ""}
                    />
                  );
              }
            })}
          </Box>
          <ul
            style={{ margin: 0, padding: "0px 0px 0px 18px", fontSize: "14px" }}
          >
            {["Dilarang menggunakan symbol"].map((warning, warningIndex) => {
              return <li key={warningIndex}>{warning}</li>;
            })}
          </ul>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            loading={false}
            disabled={submitLoading}
            variant="outlined"
            size="medium"
            onClick={props.backEvent}
          >
            <Typography variant="button" display="block" gutterBottom>
              Cancel
            </Typography>
          </LoadingButton>
          <LoadingButton
            type="submit"
            loading={submitLoading}
            disabled={submitLoading}
            variant="contained"
            size="medium"
          >
            <Typography variant="button" display="block" gutterBottom>
              Create
            </Typography>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </ModalPortal>
  );
};

const modalDiv = document.getElementById("modals");
const ModalPortal = (props: any) => {
  /**
   * Issue #2: Cannot nest forms directly in DOM
   * https://html.spec.whatwg.org/multipage/forms.html#the-form-element
   * This is a basic html spec, the fix is using portals to unest Modals
   * https://reactjs.org/docs/portals.html
   */
  return createPortal(props.children, modalDiv!);
};

const MemoizedSelectInputDialogCreateAndUpdate = React.memo(
  SelectInputDialogCreateAndUpdate,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedSelectInputDialogCreateAndUpdate;
