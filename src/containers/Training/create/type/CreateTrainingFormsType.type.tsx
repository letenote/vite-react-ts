import {
  DateRrangeFormType,
  FormType,
  MultipleAutocompleteFormType,
  SingleAutocompleteFormType,
} from '../../../../components/Forms/type/FormType.type';

export type CreateTrainingFormsType = {
  information: CreateTrainingInformationFormsType;
  vendor: Array<CreateTrainingVendorFormsType>;
};

export type CreateTrainingInformationFormsType = {
  name: FormType;
  date: DateRrangeFormType;
  duration: FormType;
  type: FormType;
  budgetCode: null | SingleAutocompleteFormType;
  objective: FormType;
  participants: MultipleAutocompleteFormType;
};

export type CreateTrainingVendorFormsType = {
  name: SingleAutocompleteFormType;
  cost: FormType;
};
