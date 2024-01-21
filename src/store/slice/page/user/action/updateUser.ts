import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type UpdateUserParamType = {
  data: {
    id: string;
    name: string;
    nik: string;
    email: string;
    gender: string;
    isActive: boolean;
    roleId: string;
    departementId: string;
    divisionId: string;
    positionId: string;
    levelId: string;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const updateUser =
  (param: UpdateUserParamType) => async (dispatch: Dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'post',
        url: `/v1/users/update`,
        payload: param.data,
      });

      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'User updated',
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
