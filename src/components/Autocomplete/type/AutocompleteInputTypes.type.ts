import { AutocompleteInputType } from '../enum/AutocompleteInputType.enum';

export type AutocompleteInputTypes =
  | AutocompleteInputType.VENDOR
  | AutocompleteInputType.USER
  | AutocompleteInputType.BUDGET;

export type AutocompleteOptionType = {
  id: string;
  label: string;
};
