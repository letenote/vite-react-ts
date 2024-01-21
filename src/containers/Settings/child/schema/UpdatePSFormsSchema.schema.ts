import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { UpdatePSFormsType } from '../type/UpdatePSFormsType.type';

export const UpdatePSFormsSchema: UpdatePSFormsType = {
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
    componentType: ComponentFormType.INPUT_TEXT,
    autoFocus: false,
    autoComplete: 'new-password',
    validate: {
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
        message:
          'Must have atleast 1 uppercase, 1 lowercase letter and 1 number',
      },
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters',
      },
    },
    options: [],
  },
  newPassword: {
    id: 'newPassword',
    name: 'newPassword',
    fullWidth: true,
    label: 'New Password',
    placeholder: 'type of new password',
    required: true,
    errorMessage: 'new password required',
    value: '',
    disabled: false,
    type: 'password',
    componentType: ComponentFormType.INPUT_TEXT,
    autoFocus: false,
    autoComplete: 'new-password',
    validate: {
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
        message:
          'Must have atleast 1 uppercase, 1 lowercase letter, 1 number and no space',
      },
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters',
      },
    },
    options: [],
  },
};
