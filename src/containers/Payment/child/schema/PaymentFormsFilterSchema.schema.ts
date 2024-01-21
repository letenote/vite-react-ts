import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { PaymentFormsFilterType } from '../type/PaymentFormsFilterType.type';
import { PaymentStatusType } from '../enum/PaymentStatusType.enum';

export const PaymentFormsFilterSchema: PaymentFormsFilterType = {
  name: {
    id: 'name',
    name: 'name',
    fullWidth: true,
    label: 'Vendor Name',
    placeholder: 'Vendor Name',
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
      { value: PaymentStatusType.ALL, label: PaymentStatusType.ALL },
      { value: PaymentStatusType.PAID, label: PaymentStatusType.PAID },
      { value: PaymentStatusType.UNPAID, label: PaymentStatusType.UNPAID },
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
