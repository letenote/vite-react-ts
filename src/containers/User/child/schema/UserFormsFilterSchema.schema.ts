import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { UserFormsFilterType } from '../type/UserFormsFilterType.type';

export const UserFormsFilterSchema: UserFormsFilterType = {
  name: {
    id: 'name',
    name: 'name',
    fullWidth: true,
    label: 'Name',
    placeholder: 'Name',
    required: false,
    errorMessage: 'name required',
    value: '',
    disabled: false,
    type: 'text',
    componentType: ComponentFormType.INPUT_TEXT,
    autoFocus: false,
    autoComplete: '',
    validate: {
      pattern: {
        value: /^/,
        message: '',
      },
    },
    options: [],
  },
  status: {
    id: 'status',
    name: 'status',
    fullWidth: true,
    label: 'Status',
    placeholder: 'Status',
    required: false,
    errorMessage: 'Status required',
    value: 'All',
    disabled: false,
    type: 'select',
    componentType: ComponentFormType.INPUT_DROPDOWN,
    autoFocus: false,
    autoComplete: '',
    validate: {
      pattern: {
        value: /^/,
        message: '',
      },
    },
    options: [
      { value: 'All', label: 'All' },
      { value: 'Active', label: 'Active' },
      { value: 'Inactive', label: 'Inactive' },
    ],
  },
  departement: {
    id: 'departement',
    name: 'departement',
    fullWidth: true,
    label: 'Departement',
    placeholder: 'Departement',
    required: false,
    errorMessage: 'departement required',
    value: 'All',
    disabled: false,
    type: 'select',
    componentType: ComponentFormType.INPUT_DROPDOWN,
    autoFocus: false,
    autoComplete: '',
    validate: {
      pattern: {
        value: /^/,
        message: '',
      },
    },
    options: [{ value: 'All', label: 'All' }],
  },
};
