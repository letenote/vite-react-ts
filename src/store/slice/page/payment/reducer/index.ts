import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PagePaymentListReducerInterface,
  PagePaymentReducerInterface,
} from '../interface/PagePaymentReducerInterface.interface';

const initialState: PagePaymentReducerInterface = {
  listLoading: true,
  list: [],
  totalPage: 0,
  detail: {
    loading: true,
    data: null,
  },
};

export const PaymentSlice = createSlice({
  name: 'page-payment',
  initialState,
  reducers: {
    setPaymentListLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.listLoading = action.payload.loading;
    },
    setPaymentList: (
      state,
      action: PayloadAction<{
        list: Array<PagePaymentListReducerInterface>;
        totalPage: number;
      }>
    ) => {
      state.list = action.payload.list;
      state.totalPage = action.payload.totalPage;
    },
    setPaymentDetailLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.detail.loading = action.payload.loading;
    },
    setPaymentDetail: (
      state,
      action: PayloadAction<{
        data: PagePaymentListReducerInterface;
      }>
    ) => {
      state.detail.data = action.payload.data;
    },
    updatePaymentOnList: (
      state,
      action: PayloadAction<{
        id: string;
        isPaid: boolean;
        notes: string;
        date: string;
      }>
    ) => {
      const getPaymentIndexInlist = state.list.findIndex(
        (payment) => payment.id === action.payload.id
      );
      state.detail.data.notes = action.payload.notes;
      state.detail.data.isPaid = true;
      state.detail.data.date = action.payload.date;
      state.list[getPaymentIndexInlist].notes = action.payload.notes;
      state.list[getPaymentIndexInlist].isPaid = true;
      state.list[getPaymentIndexInlist].date = action.payload.date;
    },
  },
});

export const {
  setPaymentListLoading,
  setPaymentList,
  setPaymentDetail,
  setPaymentDetailLoading,
  updatePaymentOnList,
} = PaymentSlice.actions;
export default PaymentSlice.reducer;
