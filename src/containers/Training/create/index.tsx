/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { CreateTrainingFormsSchema } from "./schema/CreateTrainingFormsSchema.schema";
import {
  CreateTrainingFormsType,
  CreateTrainingVendorFormsType,
} from "./type/CreateTrainingFormsType.type";
import {
  FieldErrors,
  useForm,
  useFieldArray,
  Controller,
} from "react-hook-form";
import Container from "@mui/material/Container";
import PageTitle from "../../../components/PageTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { camelCaseToTitleCase } from "../../../helper/populateString";
import {
  DateRrangeFormType,
  FormType,
  MultipleAutocompleteFormType,
  SingleAutocompleteFormType,
} from "../../../components/Forms/type/FormType.type";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FwdStyles } from "../../../constant/FwdStyles";
import { ComponentFormType } from "../../../components/Forms/enum/ComponentFormType.enum";
import SelectDialogForm from "../../../components/Forms/SelectDialogForm";
import DateRangeForm from "../../../components/Forms/DateRangeForm";
import { DateRange } from "@mui/x-date-pickers-pro";
import MaxHeightTextarea from "../../../components/Forms/TextArea";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import NumberFormat from "../../../components/Forms/NumberFormat";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getAutocompleteOptions } from "../../../store/slice/components/actions/getAutocompleteOptions";
import { AutocompleteInputType } from "../../../components/Autocomplete/enum/AutocompleteInputType.enum";
import { setSnackbar } from "../../../store/slice/components/reducer/snackbar";
import { createTraining } from "../../../store/slice/page/training/action/createTraining";
import moment from "moment";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { getTraining } from "../../../store/slice/page/training/action/getTraining";
import dayjs from "dayjs";
import { UpdateTrainingFormsSchema } from "./schema/UpdateTrainingFormsSchema.schema";
import { updateTraining } from "../../../store/slice/page/training/action/updateTraining";
import { AutocompleteRemoveOptionIfSame } from "../../../components/Autocomplete/helper/AutocompleteRemoveOptionIfSame";
import { SelectInputDialogType } from "../../../components/SelectInputDialog/enum/SelectInputDialogType.type";

enum titleNameType {
  CREATE = "Create",
  UPDATE = "Update",
}
type titleNameTypes = titleNameType.CREATE | titleNameType.UPDATE;

const CreateTraining = () => {
  const [titleName, setTitleName] = useState<titleNameTypes>(
    titleNameType.CREATE
  );
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const _isUpdate = query.get("u") || null;
  const navigate = useNavigate();
  const [submit, setSubmit] = useState<{ loading: boolean }>({
    loading: false,
  });
  const [populate, setPopulate] = useState<{ loading: boolean }>({
    loading: false,
  });
  const dispatch = useAppDispatch();
  const { autocomplete, selectInputOptions } = useAppSelector(
    (state) => state.components
  );
  const { training } = useAppSelector((state) => state.pages);
  const isCreateSchema = JSON.parse(JSON.stringify(CreateTrainingFormsSchema));
  const isUpdateSchema = UpdateTrainingFormsSchema;
  const defaultValues: CreateTrainingFormsType =
    _isUpdate === null ? isCreateSchema : isUpdateSchema;
  const form = useForm<CreateTrainingFormsType>({
    defaultValues: async () => {
      if (_isUpdate !== null) {
        _isUpdate !== "" &&
          (setPopulate({ loading: true }),
          await dispatch(
            getTraining({
              id: _isUpdate,
              successCB: async (populate) => {
                setTitleName(titleNameType.UPDATE);
                defaultValues.information.date.value = [
                  dayjs(
                    moment(new Date(populate.startDate)).format("YYYY-MM-DD")
                  ),
                  dayjs(
                    moment(new Date(populate.endDate)).format("YYYY-MM-DD")
                  ),
                ];
                defaultValues.information.name.value = populate.name.toString();
                defaultValues.information.duration.value =
                  populate.duration.toString();
                defaultValues.information.objective.value =
                  populate.objective.toString();
                defaultValues.information.type.value =
                  populate.trainingType.name;
                if (
                  defaultValues.information.budgetCode !== null &&
                  defaultValues.information.budgetCode.value !== null
                ) {
                  Object.assign(defaultValues.information.budgetCode.value, {
                    id: populate.budget.id,
                    label: populate.budget.code,
                  });
                }
                // defaultValues.information.participants.value = [];
                populate.participants.forEach((participant) => {
                  defaultValues.information.participants.value.push({
                    id: participant.id,
                    label: participant.name,
                  });
                });

                defaultValues.vendor = [];
                populate.payments.forEach((payment) => {
                  defaultValues.vendor.push({
                    name: {
                      ...isCreateSchema.vendor[0].name,
                      value: {
                        id: payment.vendor.id,
                        label: payment.vendor.name,
                      },
                    },
                    cost: {
                      ...isCreateSchema.vendor[0].cost,
                      value: payment.cost,
                    },
                  });
                });
              },
              failedCB: () => navigate(-1),
            })
          ));
      }
      await dispatch(
        getAutocompleteOptions({ type: AutocompleteInputType.VENDOR })
      );
      await dispatch(
        getAutocompleteOptions({ type: AutocompleteInputType.BUDGET })
      );
      if (autocomplete.user.list.length === 0) {
        await dispatch(
          getAutocompleteOptions({ type: AutocompleteInputType.USER })
        );
      }
      setPopulate({ loading: false });
      console.log("POPULATE:TRAINING", { defaultValues });

      return defaultValues;
    },
  });
  const { register, formState, handleSubmit, setValue, clearErrors, control } =
    form;
  const {
    fields: vendorFields,
    append: appendVendorFields,
    remove: removeVendorFields,
  } = useFieldArray({
    control,
    name: "vendor",
  });
  const { errors } = formState;

  const appendVendor = async () => {
    const _getVendorField = await JSON.parse(
      JSON.stringify(CreateTrainingFormsSchema.vendor[0])
    );
    appendVendorFields(_getVendorField);
  };

  const onValid = (data: CreateTrainingFormsType) => {
    setSubmit({ loading: true });
    const _payload = {
      name: data.information.name.value.toString(),
      startDate:
        data.information.date.value[0] === null
          ? ""
          : data.information.date.value[0].format("DD/MMM/YYYY"),
      endDate:
        data.information.date.value[1] === null
          ? ""
          : data.information.date.value[1].format("DD/MMM/YYYY"),
      trainingTypeId: !selectInputOptions.trainingType.loading
        ? selectInputOptions.trainingType.list.filter(
            (list) => list.name === data.information.type.value
          )[0].id
        : training.detail.data.trainingType.id,
      duration: data.information.duration.value.toString(),
      budgetId: data.information.budgetCode?.value?.id ?? "",
      objective: data.information.objective.value.toString(),
      participants: data.information.participants.value,
    };

    switch (titleName) {
      case titleNameType.CREATE:
        return dispatch(
          createTraining({
            data: {
              ..._payload,
              vendors: data.vendor.map((vendor) => {
                return {
                  id: vendor?.name?.value?.id ?? "",
                  name: vendor?.name?.value?.label ?? "",
                  cost: vendor.cost.value.toString(),
                };
              }),
            },
            successCB: () => {
              setSubmit({ loading: false });
              navigate(`/training`);
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
      case titleNameType.UPDATE:
        return dispatch(
          updateTraining({
            data: {
              id: training.detail.data.id,
              ..._payload,
              vendors: data.vendor.map((vendor) => {
                return {
                  paymentId:
                    training.detail.data.payments.filter(
                      (payment) =>
                        payment.vendor.id === vendor?.name?.value?.id || ""
                    )?.[0]?.id || "",
                  vendorId: vendor?.name?.value?.id ?? "",
                  name: vendor?.name?.value?.label ?? "",
                  cost: vendor.cost.value.toString(),
                };
              }),
            },
            successCB: () => {
              setSubmit({ loading: false });
              navigate(`/training`);
            },
            failedCB: () => {
              setSubmit({ loading: false });
            },
          })
        );
      default:
        return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onError = (_errors: FieldErrors<CreateTrainingFormsType>) => {
    console.log("onError", { _errors, form });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(
      setSnackbar({
        open: true,
        autoHideDuration: 3000,
        severity: "warning",
        message: "Please make sure all forms to be filled",
      })
    );
  };

  useEffect(() => {
    return () => {
      if (titleName === titleNameType.UPDATE) {
        isUpdateSchema.information.participants.value = [];
      }
    };
  }, [isUpdateSchema.information.participants, titleName]);

  return (
    <Container sx={{ pt: 3 }} maxWidth={false}>
      <PageTitle title={`${titleName} Training`} backNavigate={"training"} />
      <Box
        component="form"
        id={`training-create-page`}
        // noValidate
        onSubmit={handleSubmit(onValid, onError)}
      >
        {Object.keys(defaultValues).map((section, sectionIndex) => {
          const _getSection =
            defaultValues[section as keyof typeof defaultValues];
          return (
            <Box
              key={sectionIndex}
              sx={{
                mb: 5,
                backgroundColor: "white",
                p: 3,
                borderRadius: FwdStyles.borderRadius,
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ textAlign: "left", mb: 1 }}
                >
                  {camelCaseToTitleCase(section)}
                </Typography>
                {section === "vendor" ? (
                  <Button
                    sx={{
                      width: {
                        md: "200px",
                        xs: "50%",
                      },
                    }}
                    fullWidth={false}
                    size={"small"}
                    variant="outlined"
                    onClick={appendVendor}
                  >
                    <Typography variant="button" display="block" gutterBottom>
                      + {section}
                    </Typography>
                  </Button>
                ) : null}
              </Box>
              {section === "information" &&
                Object.keys(_getSection).map((field, fieldIndex) => {
                  const _getField: FormType | DateRrangeFormType =
                    _getSection[field as keyof typeof _getSection];
                  const _registerField = `${section}.${field}.value` as any;
                  const _errors =
                    errors[section as keyof typeof defaultValues]?.[
                      field as keyof typeof _getSection
                    ];

                  switch (_getField["componentType"]) {
                    case ComponentFormType.INPUT_NUMBER_FORMAT:
                      return (
                        <NumberFormat
                          key={fieldIndex}
                          name={(_getField as FormType).name}
                          registerField={_registerField}
                          id={(_getField as FormType).id}
                          label={(_getField as FormType).label}
                          required={(_getField as FormType).required}
                          control={control}
                          startAdornment={false}
                          endAdornment={true}
                          suffix={"Hours"}
                          error={_errors ? true : false}
                          helperText={(_getField as FormType).errorMessage}
                          value={(_getField as FormType).value.toString()}
                          style={{
                            marginLeft: 0,
                            width: "100%",
                          }}
                          disabled={(_getField as FormType).disabled}
                        />
                      );
                    case ComponentFormType.INPUT_AUTOCOMPLETE_SINGLE:
                      // console.log('DEBUG:V', {
                      //   v: _getField as SingleAutocompleteFormType,
                      // });
                      return (
                        <Controller
                          key={fieldIndex}
                          control={control}
                          name={_registerField}
                          rules={{
                            required: {
                              value: (_getField as FormType).required,
                              message: (_getField as FormType).errorMessage,
                            },
                          }}
                          render={({ field: { ref, onChange, ...field } }) => (
                            <Autocomplete
                              multiple={false}
                              sx={{ width: "100%", mt: 2, mb: 1 }}
                              // disabled={(_getField as FormType).disabled}
                              // disabled={true}
                              options={
                                titleName === titleNameType.UPDATE
                                  ? [
                                      {
                                        id: training.detail.data.budget.id,
                                        label: training.detail.data.budget.code,
                                      },
                                    ]
                                  : autocomplete.budget.list
                              }
                              // defaultValue={{
                              //   id: '65a70f82cae4639f45ce2aba',
                              //   label: 'BGTFO-1702024-8dZMF6m4Cm',
                              // }}
                              defaultValue={
                                (_getField as SingleAutocompleteFormType).value
                              }
                              isOptionEqualToValue={(option, value) =>
                                option.id === value.id
                              }
                              getOptionLabel={(option) => option.label}
                              onChange={(_, data) => onChange(data)}
                              renderInput={(params) => (
                                <TextField
                                  {...field}
                                  {...params}
                                  fullWidth
                                  inputRef={ref}
                                  variant={"outlined"}
                                  label={(_getField as FormType).label}
                                  error={_errors ? true : false}
                                  helperText={
                                    _errors
                                      ? (_getField as FormType).errorMessage
                                      : ""
                                  }
                                />
                              )}
                            />
                          )}
                        />
                      );
                    case ComponentFormType.INPUT_AUTOCOMPLETE_MULTIPLE:
                      return (
                        <Controller
                          key={fieldIndex}
                          control={control}
                          name={_registerField}
                          rules={{
                            required: {
                              value: (_getField as FormType).required,
                              message: (_getField as FormType).errorMessage,
                            },
                          }}
                          render={({ field: { ref, onChange, ...field } }) => (
                            <Autocomplete
                              multiple
                              sx={{ width: "100%", mt: 2, mb: 1 }}
                              options={autocomplete.user.list}
                              defaultValue={
                                (_getField as MultipleAutocompleteFormType)
                                  .value
                              }
                              // defaultValue={[
                              //   {
                              //     id: '65a70f4d978c6c2753854bbd',
                              //     label: 'Restu k',
                              //   },
                              // ]}
                              isOptionEqualToValue={(option, value) =>
                                option.id === value.id
                              }
                              getOptionLabel={(option) => option.label}
                              onChange={(_, data) => onChange(data)}
                              renderInput={(params) => (
                                <TextField
                                  {...field}
                                  {...params}
                                  fullWidth
                                  inputRef={ref}
                                  variant={"outlined"}
                                  label={(_getField as FormType).label}
                                  error={_errors ? true : false}
                                  helperText={
                                    _errors
                                      ? (_getField as FormType).errorMessage
                                      : ""
                                  }
                                />
                              )}
                            />
                          )}
                        />
                      );
                    case ComponentFormType.INPUT_TEXT_AREA:
                      return (
                        <MaxHeightTextarea
                          key={fieldIndex}
                          name={(_getField as FormType).name}
                          registerField={_registerField}
                          id={(_getField as FormType).id}
                          label={(_getField as FormType).label}
                          required={(_getField as FormType).required}
                          control={control}
                          error={_errors ? true : false}
                          helperText={(_getField as FormType).errorMessage}
                          value={(_getField as FormType).value.toString()}
                          style={{
                            marginLeft: 0,
                            width: "100%",
                          }}
                          options={(_getField as FormType).options}
                          disabled={(_getField as FormType).disabled}
                        />
                      );
                    case ComponentFormType.INPUT_DATE_RANGE:
                      console.log("DEBUG:V", {
                        v: _getField as FormType,
                      });
                      return (
                        <DateRangeForm
                          key={fieldIndex}
                          name={(_getField as FormType).name}
                          registerField={_registerField}
                          id={(_getField as FormType).id}
                          label={
                            (_getField as DateRrangeFormType).label as {
                              start: string;
                              end: string;
                            }
                          }
                          error={_errors ? true : false}
                          required={(_getField as FormType).required}
                          control={control}
                          disabled={(_getField as FormType).disabled}
                          helperText={(_getField as FormType).errorMessage}
                          // value={[dayjs('2022-04-17'), dayjs('2022-04-27')]}
                          // value={[
                          //   dayjs(
                          //     moment(
                          //       new Date(training.detail.data.startDate)
                          //     ).format('YYYY-MM-DD')
                          //   ),
                          //   dayjs(
                          //     moment(
                          //       new Date(training.detail.data.endDate)
                          //     ).format('YYYY-MM-DD')
                          //   ),
                          // ]}
                          // value={
                          //   (_getField as FormType).value.length === 0
                          //     ? [null, null]
                          //     : (_getField as FormType).value
                          // }
                          value={
                            (_getField as FormType).value as DateRange<Date>
                          }
                          style={{
                            marginLeft: 0,
                            width: "100%",
                            marginBottom: 1,
                            marginTop: 2,
                          }}
                        />
                      );
                    case ComponentFormType.INPUT_SELECT_MODAL:
                      return (
                        <SelectDialogForm
                          key={fieldIndex}
                          name={(_getField as FormType).name}
                          registerField={_registerField}
                          id={(_getField as FormType).id}
                          label={(_getField as FormType).label.toString()}
                          required={(_getField as FormType).required}
                          value={(_getField as FormType).value.toString()}
                          error={_errors ? true : false}
                          control={control}
                          helperText={(_getField as FormType).errorMessage}
                          style={{
                            marginLeft: 0,
                            width: "100%",
                          }}
                          disabled={(_getField as FormType).disabled}
                          onSelect={(val) => {
                            setValue(_registerField, val);
                            clearErrors(_registerField);
                          }}
                          SelectInputDialogType={
                            (_getField as FormType).SelectInputDialogType ??
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
                              md: 0,
                            },
                            width: {
                              xs: "100%",
                              md: "100%",
                            },
                          }}
                          fullWidth={(_getField as FormType).fullWidth}
                          label={`${(_getField as FormType).label}${
                            (_getField as FormType).required ? "*" : ""
                          }`}
                          defaultValue={(
                            _getField as FormType
                          ).value.toString()}
                          type={(_getField as FormType).type}
                          autoFocus={(_getField as FormType).autoFocus}
                          autoComplete={(_getField as FormType).autoComplete}
                          {...register(_registerField, {
                            required: {
                              value: (_getField as FormType).required,
                              message: (_getField as FormType).errorMessage,
                            },
                            disabled: (_getField as FormType).disabled,
                            pattern: {
                              value: (_getField as FormType).validate.pattern
                                .value,
                              message: (_getField as FormType).validate.pattern
                                .message,
                            },
                          })}
                          error={!!_errors}
                          helperText={_errors?.["value"]?.["message"] ?? ""}
                        />
                      );
                  }
                })}
              {section === "vendor" &&
                (vendorFields as Array<CreateTrainingVendorFormsType>).map(
                  (
                    vendor: CreateTrainingVendorFormsType & { id?: string },
                    vendorIndex
                  ) => {
                    return (
                      <Box
                        key={vendor.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: {
                            md: "row",
                            xs: "column",
                          },
                        }}
                      >
                        <IconButton
                          aria-label={`remove-${vendorIndex}`}
                          disabled={titleName === titleNameType.UPDATE}
                          onClick={() =>
                            vendorFields.length > 1 &&
                            removeVendorFields(vendorIndex)
                          }
                          sx={{ mr: 1 }}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                        {Object.keys(vendor).map((field, fieldIndex) => {
                          const _getVendorField =
                            vendorFields[vendorIndex][
                              field as keyof CreateTrainingVendorFormsType
                            ];
                          const _registerVendorField =
                            `${section}.${vendorIndex}.${field}.value` as any;
                          const _vendorFieldErrors =
                            errors["vendor"]?.[vendorIndex]?.[
                              field as keyof CreateTrainingVendorFormsType
                            ];

                          if (field === "id") return null;
                          switch (_getVendorField.componentType) {
                            case ComponentFormType.INPUT_AUTOCOMPLETE_SINGLE:
                              return (
                                <Controller
                                  key={fieldIndex}
                                  control={control}
                                  name={_registerVendorField}
                                  rules={{
                                    required: {
                                      value: (_getVendorField as FormType)
                                        .required,
                                      message: (_getVendorField as FormType)
                                        .errorMessage,
                                    },
                                  }}
                                  render={({
                                    field: { ref, onChange, ...field },
                                  }) => (
                                    <Autocomplete
                                      multiple={false}
                                      sx={{ width: "100%", mt: 2, mb: 1 }}
                                      options={
                                        titleName === titleNameType.CREATE
                                          ? autocomplete.vendor.list
                                          : AutocompleteRemoveOptionIfSame(
                                              autocomplete.vendor.list,
                                              training.detail.data.payments
                                            )
                                      }
                                      defaultValue={
                                        (
                                          _getVendorField as SingleAutocompleteFormType
                                        ).value
                                      }
                                      isOptionEqualToValue={(option, value) =>
                                        option.id === value.id
                                      }
                                      getOptionLabel={(option) => option.label}
                                      onChange={(_, data) => onChange(data)}
                                      renderInput={(params) => (
                                        <TextField
                                          {...field}
                                          {...params}
                                          fullWidth
                                          inputRef={ref}
                                          variant={"outlined"}
                                          label={
                                            (_getVendorField as FormType).label
                                          }
                                          error={
                                            _vendorFieldErrors ? true : false
                                          }
                                          helperText={
                                            _vendorFieldErrors
                                              ? (_getVendorField as FormType)
                                                  .errorMessage
                                              : ""
                                          }
                                        />
                                      )}
                                    />
                                  )}
                                />
                              );
                            default:
                              return (
                                <NumberFormat
                                  key={fieldIndex}
                                  name={_getVendorField.name}
                                  registerField={_registerVendorField}
                                  id={_getVendorField.id}
                                  label={_getVendorField.label}
                                  required={_getVendorField.required}
                                  control={control}
                                  error={_vendorFieldErrors ? true : false}
                                  helperText={_getVendorField.errorMessage}
                                  value={
                                    _getVendorField?.value?.toString() ?? ""
                                  }
                                  style={{
                                    marginLeft: 3,
                                    width: "100%",
                                  }}
                                  disabled={_getVendorField.disabled}
                                />
                              );
                          }
                        })}
                      </Box>
                    );
                  }
                )}
            </Box>
          );
        })}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Button
            sx={{
              mr: {
                md: 3,
                xs: 0,
              },
              mb: {
                md: 0,
                xs: 2,
              },
              width: {
                md: "200px",
                xs: "100%",
              },
            }}
            fullWidth={false}
            disabled={submit.loading}
            size={"large"}
            component={Link}
            to="/training"
            variant="outlined"
          >
            <Typography variant="button" display="block" gutterBottom>
              Cancel
            </Typography>
          </Button>
          <LoadingButton
            type="submit"
            loading={submit.loading}
            disabled={submit.loading}
            variant={"contained"}
            size={"large"}
            sx={{
              width: {
                md: "200px",
                xs: "100%",
              },
            }}
          >
            <Typography variant="button" display="block" gutterBottom>
              {`${titleName} Training`}
            </Typography>
          </LoadingButton>
        </Box>
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={submit.loading}
      >
        <CircularProgress color="inherit" />
        <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2 }}>
          {titleName === titleNameType.CREATE
            ? "Please wait, training form submitting.."
            : "Please wait, training update form submitting.."}
        </Typography>
      </Backdrop>
      <Backdrop
        sx={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={populate.loading}
      >
        <CircularProgress color="inherit" />
        <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2 }}>
          {titleName === titleNameType.CREATE
            ? "Please wait, load training data.."
            : "Please wait, prepare training forms.."}
        </Typography>
      </Backdrop>
    </Container>
  );
};

const MemoizedCreateTraining = React.memo(
  CreateTraining,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedCreateTraining;
