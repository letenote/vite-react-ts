import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type RemoveUserParamType = {
  data: {
    id: string;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const removeUserAction =
  (param: RemoveUserParamType) => async (dispatch: Dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'delete',
        url: `/v1/users/remove`,
        payload: param.data,
      });
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'User removed',
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
