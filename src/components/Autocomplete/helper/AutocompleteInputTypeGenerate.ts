import { AutocompleteOptionsInterface } from '../../../store/slice/components/interface/AutocompleteOptionsInterface.interface';
import { AutocompleteInputType } from '../enum/AutocompleteInputType.enum';
import { AutocompleteInputTypes } from '../type/AutocompleteInputTypes.type';

export const AutocompleteInputTypeGenerate = (
  type: AutocompleteInputTypes
): keyof AutocompleteOptionsInterface => {
  switch (type) {
    case AutocompleteInputType.VENDOR:
      return 'vendor';
    case AutocompleteInputType.USER:
      return 'user';
    case AutocompleteInputType.BUDGET:
      return 'budget';
  }
};
