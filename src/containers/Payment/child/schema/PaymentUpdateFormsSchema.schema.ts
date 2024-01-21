import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { TrainingStatusType } from '../../../Training/child/enum/TrainingStatusType.enum';
import { PaymentUpdateFormsFilterType } from '../type/PaymentUpdateFormsFilterType.type';

export const PaymentUpdateFormsFilterSchema: PaymentUpdateFormsFilterType = {
  invoice: {
    id: 'invoice',
    name: 'invoice',
    fullWidth: true,
    label: 'Invoice',
    placeholder: 'Invoice',
    required: true,
    errorMessage: 'Invoice required',
    value: '',
    disabled: true,
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
  cost: {
    id: 'cost',
    name: 'cost',
    fullWidth: true,
    label: 'Cost',
    placeholder: 'Cost',
    required: true,
    errorMessage: 'cost required',
    value: '',
    disabled: true,
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
    required: true,
    errorMessage: 'Status required',
    value: TrainingStatusType.PAID,
    disabled: true,
    type: 'select',
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
  notes: {
    id: 'notes',
    name: 'notes',
    fullWidth: true,
    label: 'Payment notes',
    placeholder: 'Payment notes',
    required: true,
    errorMessage: 'payment notes required',
    value: '',
    disabled: false,
    type: 'text',
    componentType: ComponentFormType.INPUT_TEXT_AREA,
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
