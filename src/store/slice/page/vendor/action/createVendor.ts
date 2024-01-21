import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type CreateVendorParamType = {
  data: {
    name: string;
    address: string;
    email: string;
    phone: string;
    vendorTypeId: string;
    isActive: boolean;
  };
  successCB: () => void;
  failedCB: () => void;
};

export const createVendor =
  (param: CreateVendorParamType) => async (dispatch: Dispatch) => {
    try {
      console.log('CreateVendorParamType', { param });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await API({
        method: 'post',
        url: `/v1/vendors/register`,
        payload: param.data,
      });
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: 'Vendor created',
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
