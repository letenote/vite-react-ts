import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AutocompleteOptionListInterface,
  AutocompleteOptionsInterface,
} from '../interface/AutocompleteOptionsInterface.interface';

const initialState: AutocompleteOptionsInterface = {
  vendor: {
    loading: true,
    list: [],
  },
  user: {
    loading: true,
    list: [],
  },
  budget: {
    loading: true,
    list: [],
  },
};

export const AutocompleteOptionsSlice = createSlice({
  name: 'autocomplete-input-options',
  initialState,
  reducers: {
    setAutocompleteOptionsLoading: (
      state,
      action: PayloadAction<{
        type: keyof AutocompleteOptionsInterface;
        loading: boolean;
      }>
    ) => {
      state[action.payload.type].loading = action.payload.loading;
    },
    setAutocompleteOptions: (
      state,
      action: PayloadAction<{
        type: keyof AutocompleteOptionsInterface;
        list: Array<AutocompleteOptionListInterface>;
      }>
    ) => {
      state[action.payload.type].list = [
        ...action.payload.list.map((option) => {
          return {
            id: option.id,
            label: option[action.payload.type !== 'budget' ? 'name' : 'code'],
          };
        }),
      ];
    },
  },
});

export const { setAutocompleteOptionsLoading, setAutocompleteOptions } =
  AutocompleteOptionsSlice.actions;
export default AutocompleteOptionsSlice.reducer;
