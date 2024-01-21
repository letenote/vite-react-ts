import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { TrainingStatusType } from '../enum/TrainingStatusType.enum';
import { TrainingFormsFilterType } from '../type/TrainingFormsFilterType.type';

export const TrainingFormsFilterSchema: TrainingFormsFilterType = {
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
      { value: TrainingStatusType.ALL, label: TrainingStatusType.ALL },
      { value: TrainingStatusType.PAID, label: TrainingStatusType.PAID },
      { value: TrainingStatusType.UNPAID, label: TrainingStatusType.UNPAID },
    ],
  },
  date: {
    id: 'date',
    name: 'date',
    fullWidth: true,
    label: {
      start: 'Start Date',
      end: 'End Date',
    },
    placeholder: 'Date',
    required: false,
    errorMessage: 'date required',
    value: [null, null],
    disabled: false,
    type: 'text',
    componentType: ComponentFormType.INPUT_DATE_RANGE,
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
};
