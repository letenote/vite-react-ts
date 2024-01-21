import { ComponentFormType } from '../enum/ComponentFormType.enum';

export type ComponentFormTypes =
  | ComponentFormType.INPUT_TEXT
  | ComponentFormType.INPUT_DROPDOWN
  | ComponentFormType.INPUT_SELECT_MODAL
  | ComponentFormType.INPUT_TEXT_AREA
  | ComponentFormType.INPUT_NUMBER_FORMAT
  | ComponentFormType.INPUT_DATE_RANGE
  | ComponentFormType.INPUT_AUTOCOMPLETE_MULTIPLE
  | ComponentFormType.INPUT_AUTOCOMPLETE_SINGLE;
