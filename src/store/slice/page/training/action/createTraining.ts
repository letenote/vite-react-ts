import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { AutocompleteOptionType } from '../../../../../components/Autocomplete/type/AutocompleteInputTypes.type';

type CreateTrainingParamType = {
  data: {
    name: string;
    startDate: string;
    endDate: string;
    duration: string;
    trainingTypeId: string;
    budgetId: string;
    objective: string;
    participants: Array<AutocompleteOptionType>;
    vendors: Array<{
      id: string;
      name: string;
      cost: string;
    }>;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const createTraining =
  (param: CreateTrainingParamType) => async (dispatch: Dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'post',
        url: `/v1/trainings/register`,
        payload: param.data,
      });
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'Training created',
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
