import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PageUserListReducerInterface,
  PageUserReducerInterface,
} from '../interface/PageUserReducerInterface.interface';

const initialState: PageUserReducerInterface = {
  listLoading: true,
  list: [],
  totalPage: 0,
};

export const UserSlice = createSlice({
  name: 'page-user',
  initialState,
  reducers: {
    setListLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.listLoading = action.payload.loading;
    },
    setUserList: (
      state,
      action: PayloadAction<{
        list: Array<PageUserListReducerInterface>;
        totalPage: number;
      }>
    ) => {
      console.log('DEBUG:USER', { payload: action.payload });
      state.list = action.payload.list;
      state.totalPage = action.payload.totalPage;
    },
  },
});

export const { setListLoading, setUserList } = UserSlice.actions;
export default UserSlice.reducer;
