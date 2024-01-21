import {
  DateRrangeFormType,
  FormType,
} from '../../../../components/Forms/type/FormType.type';

export type TrainingFormsFilterType = {
  name: FormType;
  status: FormType;
  date: DateRrangeFormType;
};
