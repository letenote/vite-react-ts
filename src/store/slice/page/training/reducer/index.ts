import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PageTrainingListReducerInterface,
  PageTrainingReducerInterface,
  TrainingDetailReducerInterface,
} from "../interface/PageTrainingReducerInterface.interface";

const initialState: PageTrainingReducerInterface = {
  listLoading: true,
  list: [],
  totalPage: 0,
  detail: {
    loading: true,
    data: {
      id: "",
      name: "",
      createdAt: "",
      startDate: "",
      endDate: "",
      objective: "",
      duration: "",
      createdBy: {
        id: "",
        name: "",
        departement: {
          id: "",
          name: "",
        },
      },
      budget: {
        name: "",
        id: "",
        code: "",
        cost: "",
        requestBy: {
          id: "",
          name: "",
          createdAt: "",
        },
      },
      trainingType: {
        id: "",
        name: "",
      },
      participants: [],
      payments: [],
    },
  },
};

export const TrainingSlice = createSlice({
  name: "page-training",
  initialState,
  reducers: {
    setTrainingListLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.listLoading = action.payload.loading;
    },
    setTrainingList: (
      state,
      action: PayloadAction<{
        list: Array<PageTrainingListReducerInterface>;
        totalPage: number;
      }>
    ) => {
      state.list = action.payload.list;
      state.totalPage = action.payload.totalPage;
    },
    setTrainingDetailLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.detail.loading = action.payload.loading;
    },
    setTrainingDetailData: (
      state,
      action: PayloadAction<{
        data: TrainingDetailReducerInterface | null;
      }>
    ) => {
      state.detail.data =
        action.payload.data === null
          ? {
              id: "",
              name: "",
              createdAt: "",
              startDate: "",
              endDate: "",
              objective: "",
              duration: "",
              createdBy: {
                id: "",
                name: "",
                departement: {
                  id: "",
                  name: "",
                },
              },
              budget: {
                name: "",
                id: "",
                code: "",
                cost: "",
                requestBy: {
                  id: "",
                  name: "",
                  createdAt: "",
                },
              },
              trainingType: {
                id: "",
                name: "",
              },
              participants: [],
              payments: [],
            }
          : action.payload.data;
    },
  },
});

export const {
  setTrainingListLoading,
  setTrainingList,
  setTrainingDetailLoading,
  setTrainingDetailData,
} = TrainingSlice.actions;
export default TrainingSlice.reducer;
