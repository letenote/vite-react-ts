import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/settings/user/reducer/user';
import vendorReducer from './slice/page/vendor/reducer';
import snackbarReducer from './slice/components/reducer/snackbar';
import pageUserReducer from './slice/page/user/reducer';
import budgetReducer from './slice/page/budget/reducer';
import trainingReducer from './slice/page/training/reducer';
import paymentReducer from './slice/page/payment/reducer';
import SelectInputOptionsReducer from './slice/components/reducer/selectInputOptions';
import autocompleteReducer from './slice/components/reducer/autocompleteOptions';
import monitoringReducer from './slice/page/monitoring/reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    pages: combineReducers({
      user: pageUserReducer,
      vendor: vendorReducer,
      budget: budgetReducer,
      training: trainingReducer,
      payment: paymentReducer,
      monitoring: monitoringReducer,
    }),
    components: combineReducers({
      autocomplete: autocompleteReducer,
      snackbar: snackbarReducer,
      selectInputOptions: SelectInputOptionsReducer,
    }),
    settings: combineReducers({
      user: userReducer,
    }),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
