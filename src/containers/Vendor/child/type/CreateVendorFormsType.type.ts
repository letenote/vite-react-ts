import { FormType } from '../../../../components/Forms/type/FormType.type';

export type CreateVendorFormsType = {
  vendorData: CreateVendorrSectionDataFormsType;
  detailInformation: CreateVendorSectionDetailInformationFormsType;
};

export type CreateVendorSectionDetailInformationFormsType = {
  address: FormType;
  phone: FormType;
  email: FormType;
};

export type CreateVendorrSectionDataFormsType = {
  name: FormType;
  activated: FormType;
  vendorType: FormType;
};
