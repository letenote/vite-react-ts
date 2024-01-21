import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setPaymentList, setPaymentListLoading } from '../reducer';

type GetPaymentsParamType = {
  page: number;
  startDate?: string;
  endDate?: string;
  status?: string;
  vendorName?: string;
};

export const getPayments =
  (param: GetPaymentsParamType) => async (dispatch: Dispatch) => {
    try {
      const {
        page,
        startDate = '',
        endDate = '',
        status = '',
        vendorName = '',
      } = param;
      dispatch(setPaymentListLoading({ loading: true }));
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await API({
        method: 'post',
        url: `/v1/payments`,
        payload: {
          page: page - 1,
          startDate,
          endDate,
          status,
          vendorName,
        },
      });

      console.log('response', { response, param });
      dispatch(
        setPaymentList({
          list: response.data.data.payments,
          totalPage: response.data.data.pagination.totalPage,
        })
      );
      dispatch(setPaymentListLoading({ loading: false }));
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
