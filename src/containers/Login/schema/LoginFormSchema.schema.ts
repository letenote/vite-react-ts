import { LoginFormType } from '../type/LoginFormsType.type';

export const LoginFormSchema: LoginFormType = {
  email: {
    id: 'email',
    name: 'email',
    fullWidth: true,
    label: 'Email',
    placeholder: 'email corporate',
    required: true,
    errorMessage: 'email required',
    value: '',
    disabled: false,
    type: 'email',
    autoFocus: true,
    autoComplete: 'email',
    validate: {
      pattern: {
        value: /[^\s@]+@[^\s@]+\.[^\s@]+/gi,
        message: 'Invalid email format',
      },
    },
  },
  password: {
    id: 'password',
    name: 'password',
    fullWidth: true,
    label: 'Password',
    placeholder: 'type of password',
    required: true,
    errorMessage: 'password required',
    value: '',
    disabled: false,
    type: 'password',
    autoFocus: false,
    autoComplete: 'current-password',
    validate: {
      pattern: {
        value: /^/,
        message: '',
      },
    },
  },
};
