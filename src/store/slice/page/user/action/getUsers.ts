import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import { setListLoading, setUserList } from '../reducer';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type GetUsersParamType = {
  page: number;
  name?: string;
  status?: string;
  departementId?: string;
};

export const getUsers =
  (param: GetUsersParamType) => async (dispatch: Dispatch) => {
    try {
      const { page = 0, name = '', status = '', departementId = '' } = param;
      dispatch(setListLoading({ loading: true }));
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await API({
        method: 'post',
        url: '/v1/users',
        payload: { page: page - 1, name, status, departementId },
      });

      dispatch(
        setUserList({
          list: response.data.data.users,
          totalPage: response.data.data.pagination.totalPage,
        })
      );
      dispatch(setListLoading({ loading: false }));
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
