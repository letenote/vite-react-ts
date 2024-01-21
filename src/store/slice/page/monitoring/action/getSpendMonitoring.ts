import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setSpendData, setSpendLoading } from '../reducer';

export const getSpendMonitoring = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setSpendLoading({ loading: true }));
    const response = await API({
      method: 'get',
      url: `/v1/monitorings/total-spend`,
      payload: {},
    });

    console.log('response', { response });
    dispatch(
      setSpendData({
        data: {
          value: response.data?.data?.payment?.totalSpend ?? '0',
        },
      })
    );

    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(setSpendLoading({ loading: false }));
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
