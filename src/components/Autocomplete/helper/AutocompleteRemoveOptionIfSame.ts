import { AutocompleteOptionListInterface } from '../../../store/slice/components/interface/AutocompleteOptionsInterface.interface';
import { TrainingDetailPaymentListReducerInterface } from '../../../store/slice/page/training/interface/PageTrainingReducerInterface.interface';

export const AutocompleteRemoveOptionIfSame = (
  vendorList: Array<AutocompleteOptionListInterface>,
  itemsToBeRemoved: Array<TrainingDetailPaymentListReducerInterface>
): Array<AutocompleteOptionListInterface> => {
  return vendorList.filter(
    (item) =>
      !itemsToBeRemoved.some(
        (itemToBeRemoved) => itemToBeRemoved.vendor.id === item.id
      )
  );
};
