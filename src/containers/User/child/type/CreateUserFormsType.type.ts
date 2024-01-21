import { FormType } from '../../../../components/Forms/type/FormType.type';

export type CreateUserFormsType = {
  personalData: CreateUserSectionPersonalDataFormsType;
  detailInformation: CreateUserSectionDetailInformationFormsType;
};

export type CreateUserSectionDetailInformationFormsType = {
  role: FormType;
  departement: FormType;
  division: FormType;
  position: FormType;
  level: FormType;
};

export type CreateUserSectionPersonalDataFormsType = {
  nik: FormType;
  email: FormType;
  name: FormType;
  gender: FormType;
  activated: FormType;
};
