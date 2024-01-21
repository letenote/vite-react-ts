import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { AutocompleteOptionType } from '../../../../../components/Autocomplete/type/AutocompleteInputTypes.type';

type UpdateTrainingParamType = {
  data: {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    duration: string;
    trainingTypeId: string;
    budgetId: string;
    objective: string;
    participants: Array<AutocompleteOptionType>;
    vendors: Array<{
      paymentId: string;
      vendorId: string;
      name: string;
      cost: string;
    }>;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const updateTraining =
  (param: UpdateTrainingParamType) => async (dispatch: Dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'post',
        url: `/v1/trainings/update`,
        payload: param.data,
      });
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'Training updated',
        })
      );
      return param.successCB();
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        console.log('errr', (error.response?.data as ErrorResposeType).error);
        dispatch(
          setSnackbar({
            open: true,
            autoHideDuration: 3000,
            severity: 'warning',
            message: error.response?.data.message ?? error.message ?? '',
          })
        );
      }

      return param.failedCB();
    }
  };
