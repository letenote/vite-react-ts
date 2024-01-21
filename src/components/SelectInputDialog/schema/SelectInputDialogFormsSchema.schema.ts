import { ComponentFormType } from '../../Forms/enum/ComponentFormType.enum';
import { SelectInputDialogFormsType } from '../type/SelectInputDialogFormsType.type';

export const SelectInputDialogFormsSchema: SelectInputDialogFormsType = {
  name: {
    id: 'name',
    name: 'name',
    fullWidth: true,
    label: 'Name',
    placeholder: 'Name',
    required: true,
    errorMessage: 'name required',
    value: '',
    disabled: false,
    type: 'text',
    componentType: ComponentFormType.INPUT_TEXT,
    autoFocus: true,
    autoComplete: '',
    validate: {
      pattern: {
        value: /^[a-zA-Z 0-9_.-]*$/,
        message: 'Only letters, No Symbol',
      },
      other: [
        // {
        //   value: /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,
        //   message: 'must be capital',
        // },
      ],
    },
    options: [],
  },
};
