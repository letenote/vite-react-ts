import { FormType } from '../../../../components/Forms/type/FormType.type';

export type CreateBudgetFormsType = {
  budgetData: CreateBudgetSectionDataFormsType;
  detailInformation: CreateBudgetSectionDetailInformationFormsType;
};

export type CreateBudgetSectionDetailInformationFormsType = {
  cost: FormType;
  information: FormType;
};

export type CreateBudgetSectionDataFormsType = {
  name: FormType;
};
