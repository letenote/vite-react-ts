/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../store';
import { PagePaymentListReducerInterface } from '../../../store/slice/page/payment/interface/PagePaymentReducerInterface.interface';
import { PaymentUpdateFormsFilterSchema } from './schema/PaymentUpdateFormsSchema.schema';
import { PaymentUpdateFormsFilterType } from './type/PaymentUpdateFormsFilterType.type';
import { FieldErrors, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { setSnackbar } from '../../../store/slice/components/reducer/snackbar';
import { ComponentFormType } from '../../../components/Forms/enum/ComponentFormType.enum';
import MaxHeightTextarea from '../../../components/Forms/TextArea';
import { updatePayment } from '../../../store/slice/page/payment/action/updatePayment';

type PaymentUpdateDialogPropsType = {
  open: boolean;
  closeEvent: () => void;
  data: PagePaymentListReducerInterface;
};

const PaymentUpdateDialog = (props: PaymentUpdateDialogPropsType) => {
  const dispatch = useAppDispatch();
  const defaultValues: PaymentUpdateFormsFilterType = JSON.parse(
    JSON.stringify(PaymentUpdateFormsFilterSchema)
  );
  const form = useForm<PaymentUpdateFormsFilterType>({
    defaultValues: async () => {
      defaultValues.invoice.value = props.data.invoice;
      defaultValues.cost.value = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(Number(props.data.cost));
      return defaultValues;
    },
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { register, formState, handleSubmit, control } = form;
  const { errors } = formState;
  const [submit, setSubmit] = useState<{ loading: boolean }>({
    loading: false,
  });

  const onValid = (data: PaymentUpdateFormsFilterType) => {
    setSubmit({ loading: true });
    const _payload = {
      id: props.data.id,
      isPaid: true,
      notes: data.notes.value.toString(),
    };

    dispatch(
      updatePayment({
        data: _payload,
        successCB: () => {
          setSubmit({ loading: false });
          props.closeEvent();
        },
        failedCB: () => {
          setSubmit({ loading: false });
        },
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onError = (_errors: FieldErrors<PaymentUpdateFormsFilterType>) => {
    console.log('onError', { _errors, form });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(
      setSnackbar({
        open: true,
        autoHideDuration: 3000,
        severity: 'warning',
        message: 'Please make sure all forms to be filled',
      })
    );
  };

  return (
    <Dialog
      component="form"
      id={`training-create-page`}
      // noValidate
      onSubmit={handleSubmit(onValid, onError)}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={'sm'}
      aria-labelledby="payment-create-dialog"
      disableEscapeKeyDown={true}
      open={props.open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Payment Update
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.closeEvent}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ p: '34px 32px 45px', height: '720px' }}>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textAlign: 'left', mb: 1 }}
        >
          Payment Information
        </Typography>
        {Object.keys(defaultValues).map((field) => {
          const _getField = field as keyof typeof defaultValues;
          const _registerField = `${defaultValues[_getField].id}.value` as any;
          switch (defaultValues[_getField].componentType) {
            case ComponentFormType.INPUT_TEXT_AREA:
              return (
                <MaxHeightTextarea
                  key={_getField}
                  name={defaultValues[_getField].name}
                  registerField={_registerField}
                  id={defaultValues[_getField].id}
                  label={defaultValues[_getField].label}
                  required={defaultValues[_getField].required}
                  control={control}
                  error={!!errors[_getField]}
                  helperText={defaultValues[_getField].errorMessage}
                  value={defaultValues[_getField].value.toString()}
                  style={{
                    marginLeft: 0,
                    width: '100%',
                  }}
                  options={defaultValues[_getField].options}
                  disabled={defaultValues[_getField].disabled}
                />
              );
            default:
              return (
                <TextField
                  key={_getField}
                  margin="normal"
                  fullWidth={defaultValues[_getField].fullWidth}
                  label={defaultValues[_getField].label}
                  type={'text'}
                  autoFocus={defaultValues[_getField].autoFocus}
                  autoComplete={defaultValues[_getField].autoComplete}
                  defaultValue={defaultValues[_getField].value}
                  {...register(_registerField, {
                    required: {
                      value: defaultValues[_getField].required,
                      message: defaultValues[_getField].errorMessage,
                    },
                    disabled: defaultValues[_getField].disabled,
                    pattern: {
                      value: defaultValues[_getField].validate.pattern.value,
                      message:
                        defaultValues[_getField].validate.pattern.message,
                    },
                  })}
                  error={!!errors[_getField]}
                  helperText={errors[_getField]?.value?.message}
                />
              );
          }
        })}
      </DialogContent>
      <DialogActions>
        <Box sx={{ mr: 1 }}>
          <LoadingButton
            loading={submit.loading}
            disabled={submit.loading}
            variant="outlined"
            size="medium"
            onClick={props.closeEvent}
          >
            <Typography variant="button" display="block" gutterBottom>
              Close
            </Typography>
          </LoadingButton>
        </Box>
        <LoadingButton
          loading={submit.loading}
          disabled={submit.loading}
          variant="contained"
          size="medium"
          type="submit"
        >
          <Typography variant="button" display="block" gutterBottom>
            Already Paid
          </Typography>
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

const MemoizedPaymentUpdateDialog = React.memo(
  PaymentUpdateDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedPaymentUpdateDialog;
