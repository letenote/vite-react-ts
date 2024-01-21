import { selectInputOptionsInterface } from '../../../store/slice/components/interface/selectInputOptionsInterface.interface';
import { SelectInputDialogType } from '../enum/SelectInputDialogType.type';
import { SelectInputDialogTypes } from '../type/SelectInputDialogTypes.type';

export const selectInputDialogTypeGenerate = (
  type: SelectInputDialogTypes
): keyof selectInputOptionsInterface => {
  switch (type) {
    case SelectInputDialogType.DEPARTEMENT:
      return 'departement';
    case SelectInputDialogType.DIVISION:
      return 'division';
    case SelectInputDialogType.LEVEL:
      return 'level';
    case SelectInputDialogType.POSITION:
      return 'position';
    case SelectInputDialogType.ROLE:
      return 'role';
    case SelectInputDialogType.VENDOR_TYPE:
      return 'vendorType';
    case SelectInputDialogType.TRAINING_TYPE:
      return 'trainingType';
  }
};
