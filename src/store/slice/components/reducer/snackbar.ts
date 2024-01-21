import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  setSnackbarPayloadType,
  snackbarReducerInterface,
} from '../interface/snackbarReducerInterface.interface';

const initialState: snackbarReducerInterface = {
  open: false,
  autoHideDuration: 3000,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  severity: 'success',
  message: 'This is a success message!',
};

export const SnackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<setSnackbarPayloadType>) => {
      state.open = action.payload.open;
      state.autoHideDuration = action.payload.autoHideDuration;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
    },
  },
});

export const { setSnackbar } = SnackbarSlice.actions;
export default SnackbarSlice.reducer;
