import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { updatePaymentOnList } from '../reducer';

type UpdatePaymentParamType = {
  data: {
    id: string;
    isPaid: boolean;
    notes: string;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const updatePayment =
  (param: UpdatePaymentParamType) => async (dispatch: Dispatch) => {
    try {
      const { id = '', isPaid = false, notes = '' } = param.data;
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await API({
        method: 'post',
        url: `/v1/payments/update`,
        payload: {
          id,
          isPaid,
          notes,
        },
      });

      console.log('response', { response, param });
      dispatch(
        updatePaymentOnList({
          notes,
          id,
          isPaid,
          date: response.data.data.date,
        })
      );
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: `Payment updated`,
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
            message: error.message,
          })
        );
      }
      return param.failedCB();
    }
  };
