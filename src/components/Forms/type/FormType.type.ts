import { DateRange } from '@mui/x-date-pickers-pro';
import { SelectInputDialogTypes } from '../../SelectInputDialog/type/SelectInputDialogTypes.type';
import { ComponentFormTypes } from './ComponentFormTypes.type';
import { SelectOptionsTypes } from './SelectOptionsTypes.type';
import { AutocompleteOptionType } from '../../Autocomplete/type/AutocompleteInputTypes.type';
import { Dayjs } from 'dayjs';

export type FormType = {
  id: string;
  name: string;
  fullWidth: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
  value: string | DateRange<Date>;
  disabled: boolean;
  type: string;
  componentType: ComponentFormTypes;
  autoFocus: boolean;
  autoComplete: string;
  validate: {
    pattern: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    other?: Array<{
      value: RegExp;
      message: string;
    }>;
  };
  options: SelectOptionsTypes;
  SelectInputDialogType?: SelectInputDialogTypes;
};

export type DateRrangeFormType = {
  id: string;
  name: string;
  fullWidth: boolean;
  label: {
    start: string;
    end: string;
  };
  placeholder: string;
  required: boolean;
  errorMessage: string;
  // value: DateRange<Date>;
  value: DateRange<Dayjs>;
  // value: any;
  disabled: boolean;
  type: string;
  componentType: ComponentFormTypes;
  autoFocus: boolean;
  autoComplete: string;
  validate: {
    pattern: {
      value: RegExp;
      message: string;
    };
    other?: Array<{
      value: RegExp;
      message: string;
    }>;
  };
  options: SelectOptionsTypes;
  SelectInputDialogType?: SelectInputDialogTypes;
};

export type MultipleAutocompleteFormType = {
  id: string;
  name: string;
  fullWidth: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
  value: AutocompleteOptionType[];
  disabled: boolean;
  type: string;
  componentType: ComponentFormTypes;
  autoFocus: boolean;
  autoComplete: string;
  validate: {
    pattern: {
      value: RegExp;
      message: string;
    };
    other?: Array<{
      value: RegExp;
      message: string;
    }>;
  };
  options: AutocompleteOptionType[];
  SelectInputDialogType?: SelectInputDialogTypes;
};

export type SingleAutocompleteFormType = {
  id: string;
  name: string;
  fullWidth: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
  value: AutocompleteOptionType;
  disabled: boolean;
  type: string;
  componentType: ComponentFormTypes;
  autoFocus: boolean;
  autoComplete: string;
  validate: {
    pattern: {
      value: RegExp;
      message: string;
    };
    other?: Array<{
      value: RegExp;
      message: string;
    }>;
  };
  options: AutocompleteOptionType[];
  SelectInputDialogType?: SelectInputDialogTypes;
};
