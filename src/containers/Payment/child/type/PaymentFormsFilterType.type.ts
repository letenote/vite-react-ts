import {
  DateRrangeFormType,
  FormType,
} from '../../../../components/Forms/type/FormType.type';

export type PaymentFormsFilterType = {
  name: FormType;
  status: FormType;
  date: DateRrangeFormType;
};
