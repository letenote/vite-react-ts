import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import {
  setTotalTrainingPerMonthData,
  setTotalTrainingPerMonthLoading,
} from '../reducer';

export const getTotalTrainingPerMonthMonitoring =
  () => async (dispatch: Dispatch) => {
    try {
      dispatch(setTotalTrainingPerMonthLoading({ loading: true }));
      const response = await API({
        method: 'post',
        url: `/v1/monitorings/total-training`,
        payload: {
          year: '2024',
        },
      });

      dispatch(
        setTotalTrainingPerMonthData({
          data: {
            value: response.data?.data?.training?.count?.inYear ?? [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
          },
        })
      );

      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(setTotalTrainingPerMonthLoading({ loading: false }));
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        console.log('errr', (error.response?.data as ErrorResposeType).error);
        dispatch(
          setSnackbar({
            open: true,
            autoHideDuration: 3000,
            severity: 'warning',
            message: error.message,
          })
        );
      }
    }
  };
