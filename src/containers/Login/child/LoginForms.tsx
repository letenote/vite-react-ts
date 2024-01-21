/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { lazy, memo, useState } from 'react';
import { LoginFormSchema } from '../schema/LoginFormSchema.schema';
import { useForm } from 'react-hook-form';
import { LoginFormType } from '../type/LoginFormsType.type';
import { useAppDispatch } from '../../../store';
import { login } from '../../../store/slice/settings/user/actions/login';
const TextField = lazy(() => import('@mui/material/TextField'));
const LoadingButton = lazy(() => import('@mui/lab/LoadingButton'));
const Visibility = lazy(() => import('@mui/icons-material/Visibility'));
const VisibilityOff = lazy(() => import('@mui/icons-material/VisibilityOff'));

const LoginForms = () => {
  const defaultValues = LoginFormSchema;
  const form = useForm<LoginFormType>({ defaultValues });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const showPasswordHandler = () => setShowPassword((show) => !show);
  const onSubmit = (data: LoginFormType) => {
    setLoading(true);
    dispatch(
      login({
        data: { email: data.email.value, password: data.password.value },
        failCB: () => setLoading(false),
      })
    );
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      {Object.keys(defaultValues).map((field) => {
        const _getField = field as keyof typeof defaultValues;
        const _isPasswordField = _getField === 'password';
        const _registerField = `${defaultValues[_getField].id}.value` as any;
        return (
          <TextField
            key={_getField}
            margin="normal"
            fullWidth={defaultValues[_getField].fullWidth}
            label={defaultValues[_getField].label}
            type={
              _isPasswordField
                ? showPassword
                  ? 'text'
                  : defaultValues[_getField].type
                : defaultValues[_getField].type
            }
            autoFocus={defaultValues[_getField].autoFocus}
            autoComplete={defaultValues[_getField].autoComplete}
            {...register(_registerField, {
              required: {
                value: defaultValues[_getField].required,
                message: defaultValues[_getField].errorMessage,
              },
              disabled: defaultValues[_getField].disabled,
              pattern: {
                value: defaultValues[_getField].validate.pattern.value,
                message: defaultValues[_getField].validate.pattern.message,
              },
            })}
            error={!!errors[_getField]}
            helperText={errors[_getField]?.value?.message}
            InputProps={{
              endAdornment: _isPasswordField && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={showPasswordHandler}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );
      })}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" size="small" />}
        label={<Typography sx={{ fontSize: '14px' }}>Remember me</Typography>}
        sx={{ display: 'flex' }}
      />
      <LoadingButton
        fullWidth
        type="submit"
        loading={loading}
        disabled={loading}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        size="large"
      >
        <span style={{ fontWeight: 'bold' }}>Login</span>
      </LoadingButton>
    </Box>
  );
};

const MemoizedLoginForms = memo(LoginForms, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default MemoizedLoginForms;
