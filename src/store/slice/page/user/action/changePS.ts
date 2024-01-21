import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type ChangePSParamType = {
  data: {
    id: string;
    nps: string;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const changePS =
  (param: ChangePSParamType) => async (dispatch: Dispatch) => {
    try {
      await API({
        method: 'post',
        url: `/v1/users/update/ps`,
        payload: param.data,
      });

      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'User information updated',
        })
      );

      await new Promise((resolve) => setTimeout(resolve, 500));
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
