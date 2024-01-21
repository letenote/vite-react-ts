import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { BudgetStatus } from '../../enum/BudgetStatus.enum';
import { BudgetFormsFilterType } from '../type/BudgetFormsFilterType.type';

export const BudgetFormsFilterSchema: BudgetFormsFilterType = {
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
      { value: BudgetStatus.ALL, label: BudgetStatus.ALL },
      { value: BudgetStatus.DRAFT, label: BudgetStatus.DRAFT },
      { value: BudgetStatus.IN_PROGRESS, label: BudgetStatus.IN_PROGRESS },
      { value: BudgetStatus.APPROVE, label: BudgetStatus.APPROVE },
      { value: BudgetStatus.REJECT, label: BudgetStatus.REJECT },
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
