import {
  DateRrangeFormType,
  FormType,
} from '../../../../components/Forms/type/FormType.type';

export type BudgetFormsFilterType = {
  name: FormType;
  status: FormType;
  date: DateRrangeFormType;
};
