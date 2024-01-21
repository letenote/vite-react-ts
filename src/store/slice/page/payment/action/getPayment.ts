import { Dispatch } from '@reduxjs/toolkit';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setPaymentDetail, setPaymentDetailLoading } from '../reducer';
import { PagePaymentListReducerInterface } from '../interface/PagePaymentReducerInterface.interface';

type GetPaymentParamType = {
  data: PagePaymentListReducerInterface;
};

export const getPayment =
  (param: GetPaymentParamType) => async (dispatch: Dispatch) => {
    try {
      dispatch(setPaymentDetailLoading({ loading: true }));
      dispatch(
        setPaymentDetail({
          data: param.data,
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setPaymentDetailLoading({ loading: false }));
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
