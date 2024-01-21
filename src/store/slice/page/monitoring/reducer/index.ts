import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageMonitoringReducerInterface } from '../interface/PageMonitoringReducerInterface.interface';
import { SetGenderPropsType } from '../action/getGenderMonitoring';

const initialState: PageMonitoringReducerInterface = {
  employee: {
    total: '',
  },
  gender: {
    loading: true,
    label: 'Gender',
    data: {
      male: {
        id: 0,
        label: 'Male',
        value: 0,
        color: '#183028',
      },
      female: {
        id: 1,
        label: 'Female',
        value: 0,
        color: '#FB8C00',
      },
    },
  },
  spend: {
    loading: true,
    label: 'Total Spend',
    value: '',
    suffix: '',
    prefix: 'Rp',
  },
  employeeTrained: {
    loading: false,
    label: 'Employee Trained',
    value: '',
    suffix: '',
    prefix: '',
  },
  trainingHours: {
    loading: false,
    label: 'Training Hours',
    value: '',
    suffix: 'Hrs',
    prefix: '',
  },
  totalTrainingPerMonth: {
    loading: true,
    label: 'Total Training',
    value: [],
  },
};

export const MonitoringSlice = createSlice({
  name: 'page-monitoring',
  initialState,
  reducers: {
    setGenderLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.gender.loading = action.payload.loading;
    },
    setGenderData: (
      state,
      action: PayloadAction<{ data: SetGenderPropsType }>
    ) => {
      state.gender.data.female.value = action.payload.data.female.value;
      state.gender.data.male.value = action.payload.data.male.value;
    },
    setSpendLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.spend.loading = action.payload.loading;
    },
    setSpendData: (
      state,
      action: PayloadAction<{ data: { value: string } }>
    ) => {
      state.spend.value = action.payload.data.value;
    },
    setEmployeeTrainedLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.employeeTrained.loading = action.payload.loading;
    },
    setEmployeeTrainedData: (
      state,
      action: PayloadAction<{ data: { value: string } }>
    ) => {
      state.employeeTrained.value = action.payload.data.value;
    },
    setTrainingHoursLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.trainingHours.loading = action.payload.loading;
    },
    setTrainingHoursData: (
      state,
      action: PayloadAction<{ data: { value: string } }>
    ) => {
      state.trainingHours.value = action.payload.data.value;
    },
    setTotalTrainingPerMonthLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.totalTrainingPerMonth.loading = action.payload.loading;
    },
    setTotalTrainingPerMonthData: (
      state,
      action: PayloadAction<{ data: { value: Array<number> } }>
    ) => {
      state.totalTrainingPerMonth.value = action.payload.data.value;
    },
  },
});

export const {
  setGenderLoading,
  setGenderData,
  setSpendLoading,
  setSpendData,
  setEmployeeTrainedLoading,
  setEmployeeTrainedData,
  setTrainingHoursLoading,
  setTrainingHoursData,
  setTotalTrainingPerMonthLoading,
  setTotalTrainingPerMonthData,
} = MonitoringSlice.actions;
export default MonitoringSlice.reducer;
