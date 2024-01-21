import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PageVendorListReducerInterface,
  PageVendorReducerInterface,
} from '../interface/PageVendorReducerInterface.interface';

const initialState: PageVendorReducerInterface = {
  listLoading: true,
  list: [],
  totalPage: 0,
};

export const VendorSlice = createSlice({
  name: 'page-vendor',
  initialState,
  reducers: {
    setVendorListLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.listLoading = action.payload.loading;
    },
    setVendorList: (
      state,
      action: PayloadAction<{
        list: Array<PageVendorListReducerInterface>;
        totalPage: number;
      }>
    ) => {
      state.list = action.payload.list;
      state.totalPage = action.payload.totalPage;
    },
  },
});

export const { setVendorListLoading, setVendorList } = VendorSlice.actions;
export default VendorSlice.reducer;
