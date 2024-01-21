import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PageBudgetListReducerInterface,
  PageBudgetReducerInterface,
} from '../interface/PageBudgetReducerInterface.interface';

const initialState: PageBudgetReducerInterface = {
  listLoading: true,
  list: [],
  totalPage: 0,
};

export const BudgetSlice = createSlice({
  name: 'page-budget',
  initialState,
  reducers: {
    setBudgetListLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.listLoading = action.payload.loading;
    },
    setBudgetList: (
      state,
      action: PayloadAction<{
        list: Array<PageBudgetListReducerInterface>;
        totalPage: number;
      }>
    ) => {
      state.list = action.payload.list;
      state.totalPage = action.payload.totalPage;
    },
  },
});

export const { setBudgetListLoading, setBudgetList } = BudgetSlice.actions;
export default BudgetSlice.reducer;
