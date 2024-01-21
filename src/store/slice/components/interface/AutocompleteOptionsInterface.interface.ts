export interface AutocompleteOptionsInterface {
  vendor: AutocompleteOptionsVendorInterface;
  user: AutocompleteOptionsUserInterface;
  budget: AutocompleteOptionsBudgetInterface;
}

export interface AutocompleteOptionListInterface {
  id: string;
  label: string;
  name?: string;
  code?: string;
}

export interface AutocompleteOptionsVendorInterface {
  loading: boolean;
  list: Array<AutocompleteOptionListInterface>;
}

export interface AutocompleteOptionsUserInterface {
  loading: boolean;
  list: Array<AutocompleteOptionListInterface>;
}

export interface AutocompleteOptionsBudgetInterface {
  loading: boolean;
  list: Array<AutocompleteOptionListInterface>;
}
