import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setBudgetList, setBudgetListLoading } from '../reducer';

type GetBudgetsParamType = {
  page: number;
  startDate?: string;
  endDate?: string;
  status?: string;
  name?: string;
};

export const getBudgets =
  (param: GetBudgetsParamType) => async (dispatch: Dispatch) => {
    try {
      const {
        page,
        startDate = '',
        endDate = '',
        status = '',
        name = '',
      } = param;
      dispatch(setBudgetListLoading({ loading: true }));
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await API({
        method: 'post',
        url: `/v1/budgets`,
        payload: {
          page: page - 1,
          startDate,
          endDate,
          status,
          name,
        },
      });

      console.log('response', { response, param });
      dispatch(
        setBudgetList({
          list: response.data.data.budgets,
          totalPage: response.data.data.pagination.totalPage,
        })
      );
      dispatch(setBudgetListLoading({ loading: false }));
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
