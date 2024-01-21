import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type CreateBudgetParamType = {
  data: {
    name: string;
    cost: string;
    information: string;
    isDraft: boolean;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const createBudget =
  (param: CreateBudgetParamType) => async (dispatch: Dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'post',
        url: `/v1/budgets/register`,
        payload: param.data,
      });
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: `Budget ${param.data.isDraft ? 'Save as draft' : 'created'}`,
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
