import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type RemoveVendorParamType = {
  data: {
    id: string;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const removeVendorAction =
  (param: RemoveVendorParamType) => async (dispatch: Dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'delete',
        url: `/v1/vendors/remove`,
        payload: param.data,
      });
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'Vendor Inactive',
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
