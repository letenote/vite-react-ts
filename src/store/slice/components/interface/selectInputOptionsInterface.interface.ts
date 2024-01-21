export interface selectInputOptionsInterface {
  departement: selectInputOptionsDepartementInterface;
  division: selectInputOptionsDivisionInterface;
  level: selectInputOptionsLevelInterface;
  position: selectInputOptionsPositionInterface;
  role: selectInputOptionsRoleInterface;
  vendorType: selectInputOptionsVendorTypeInterface;
  trainingType: selectInputOptionsTrainingTypeInterface;
}

export interface selectInputOptionListInterface {
  id: string;
  name: string;
}

export interface selectInputOptionsDepartementInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}
export interface selectInputOptionsDivisionInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}
export interface selectInputOptionsLevelInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}
export interface selectInputOptionsPositionInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}
export interface selectInputOptionsRoleInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}

export interface selectInputOptionsVendorTypeInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}

export interface selectInputOptionsTrainingTypeInterface {
  loading: boolean;
  list: Array<selectInputOptionListInterface>;
}
