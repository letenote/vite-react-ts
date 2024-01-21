import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  selectInputOptionListInterface,
  selectInputOptionsInterface,
} from '../interface/selectInputOptionsInterface.interface';

const initialState: selectInputOptionsInterface = {
  departement: {
    loading: true,
    list: [],
  },
  division: {
    loading: true,
    list: [],
  },
  level: {
    loading: true,
    list: [],
  },
  position: {
    loading: true,
    list: [],
  },
  role: {
    loading: true,
    list: [],
  },
  vendorType: {
    loading: true,
    list: [],
  },
  trainingType: {
    loading: true,
    list: [],
  },
};

export const SelectInputOptionsSlice = createSlice({
  name: 'select-input-options',
  initialState,
  reducers: {
    setSelectInputOptionsLading: (
      state,
      action: PayloadAction<{
        type: keyof selectInputOptionsInterface;
        loading: boolean;
      }>
    ) => {
      state[action.payload.type].loading = action.payload.loading;
    },
    setSelectInputOptions: (
      state,
      action: PayloadAction<{
        type: keyof selectInputOptionsInterface;
        list: Array<selectInputOptionListInterface>;
      }>
    ) => {
      state[action.payload.type].list = [
        ...action.payload.list,
        ...state[action.payload.type].list,
      ];
    },
    updateSelectInputOptions: (
      state,
      action: PayloadAction<{
        type: keyof selectInputOptionsInterface;
        id: string;
        name: string;
      }>
    ) => {
      const update = state[action.payload.type].list.map((list) => {
        if (list.id === action.payload.id) {
          list.name = action.payload.name;
        }
        return list;
      });

      state[action.payload.type].list = update;
    },
    deleteSelectInputOptions: (
      state,
      action: PayloadAction<{
        type: keyof selectInputOptionsInterface;
        id: string;
      }>
    ) => {
      state[action.payload.type].list = state[action.payload.type].list.filter(
        (list: selectInputOptionListInterface) => list.id !== action.payload.id
      );
    },
  },
});

export const {
  setSelectInputOptionsLading,
  setSelectInputOptions,
  deleteSelectInputOptions,
  updateSelectInputOptions,
} = SelectInputOptionsSlice.actions;
export default SelectInputOptionsSlice.reducer;
