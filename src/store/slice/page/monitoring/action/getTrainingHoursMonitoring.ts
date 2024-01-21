import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setTrainingHoursData, setTrainingHoursLoading } from '../reducer';

export const getTrainingHoursMonitoring = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setTrainingHoursLoading({ loading: true }));
    const response = await API({
      method: 'get',
      url: `/v1/monitorings/training-hours`,
      payload: {},
    });

    console.log('response:getTrainingHoursMonitoring', { response });
    dispatch(
      setTrainingHoursData({
        data: {
          value: response.data?.data?.training?.hours ?? 0,
        },
      })
    );

    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(setTrainingHoursLoading({ loading: false }));
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
