/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import Dialog from '@mui/material/Dialog';
import React, { useRef, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../../store';
import { FieldErrors, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { setSnackbar } from '../../../store/slice/components/reducer/snackbar';
import { UpdatePSFormsSchema } from './schema/UpdatePSFormsSchema.schema';
import { UpdatePSFormsType } from './type/UpdatePSFormsType.type';
import { changePS } from '../../../store/slice/page/user/action/changePS';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from '@mui/material/colors';
import { logout } from '../../../store/slice/settings/user/actions/logout';

type ChangePasswordDialogPropsType = {
  open: boolean;
  closeEvent: () => void;
};

const ChangePasswordDialog = (props: ChangePasswordDialogPropsType) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.settings);
  const defaultValues: UpdatePSFormsType = JSON.parse(
    JSON.stringify(UpdatePSFormsSchema)
  );
  const form = useForm<UpdatePSFormsType>({
    defaultValues: async () => {
      return defaultValues;
    },
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { register, formState, handleSubmit, watch } = form;
  const password = useRef({});
  password.current = watch(`${defaultValues['password'].id}.value` as any, '');
  const { errors } = formState;
  const [submit, setSubmit] = useState<{ loading: boolean }>({
    loading: false,
  });
  const [successNotifDialog, setSuccessNotifDialog] = useState<{
    open: boolean;
  }>({
    open: false,
  });

  const onValid = (data: UpdatePSFormsType) => {
    setSubmit({ loading: true });
    dispatch(
      changePS({
        data: {
          id: user.id,
          nps: data.newPassword.value.toString().replace(/\s/g, ''),
        },
        successCB: () => {
          setSubmit({ loading: false });
          setSuccessNotifDialog({ open: true });
          setTimeout(() => {
            dispatch(logout());
          }, 3000);
        },
        failedCB: () => {
          setSubmit({ loading: false });
        },
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onError = (_errors: FieldErrors<UpdatePSFormsType>) => {
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
    <React.Fragment>
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
          Update Password
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
        <DialogContent dividers sx={{ p: '34px 32px 65px' }}>
          {Object.keys(defaultValues).map((field) => {
            const _getField = field as keyof typeof defaultValues;
            const _registerField =
              `${defaultValues[_getField].id}.value` as any;
            switch (defaultValues[_getField].componentType) {
              default:
                return (
                  <TextField
                    key={_getField}
                    sx={{ mb: 1 }}
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
                      minLength: {
                        value:
                          defaultValues[_getField].validate?.minLength?.value ||
                          0,
                        message:
                          defaultValues[
                            _getField
                          ].validate?.minLength?.message.toString() || '',
                      },
                      validate: {
                        passwordNotSame: (value) => {
                          return (
                            value === password.current ||
                            'The passwords do not match'
                          );
                        },
                        noWhitespace: (value) => {
                          return (
                            new RegExp(/^\S*$/).test(value) ||
                            'Space is not allowed'
                          );
                        },
                        passwordValidate: (value) => {
                          return (
                            new RegExp(
                              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/
                            ).test(value) ||
                            'Must have atleast 1 uppercase, 1 lowercase letter and 1 number'
                          );
                        },
                      },
                    })}
                    error={!!errors[_getField]}
                    helperText={errors[_getField]?.value?.message}
                  />
                );
            }
          })}
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{ mt: 3, width: '80%' }}
          >
            Note: Please to input with{' '}
            <span style={{ fontWeight: 900 }}>standart password</span> with
            atleast 1 uppercase, 1 lowercase letter, 1 number dont use spaces
            and minimal must be at least 8 characters, for our common security.
          </Typography>
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
              Change
            </Typography>
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Dialog
        open={successNotifDialog.open}
        maxWidth={'sm'}
        aria-labelledby="alert-dialog-success-change-information"
        aria-describedby="alert-dialog-success-change-information"
      >
        <DialogContent
          sx={{
            height: '250px',
            width: {
              xs: '300px',
              md: 'auto',
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ width: 72, height: 72, mb: 2, color: green[500] }}
          />
          <Typography sx={{ textAlign: 'center', width: '80%' }}>
            Success change password, System will be redirect you to login page.
          </Typography>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const MemoizedChangePasswordDialog = React.memo(
  ChangePasswordDialog,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default MemoizedChangePasswordDialog;
