import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setGenderData, setGenderLoading } from '../reducer';

export type SetGenderPropsType = {
  male: {
    value: number;
  };
  female: {
    value: number;
  };
};

export const getGenderMonitoring = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setGenderLoading({ loading: true }));
    const response = await API({
      method: 'get',
      url: `/v1/monitorings/gender`,
      payload: {},
    });

    dispatch(
      setGenderData({
        data: {
          male: {
            value: response.data?.data?.user?.count?.male ?? 0,
          },
          female: {
            value: response.data?.data?.user?.count?.female ?? 0,
          },
        },
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(setGenderLoading({ loading: false }));
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
