import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import { setVendorList, setVendorListLoading } from '../reducer';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';

type GetVendorsParamType = {
  page: number;
  name?: string;
  status?: string;
  vendorTypeId?: string;
};

export const getVendors =
  (param: GetVendorsParamType) => async (dispatch: Dispatch) => {
    try {
      dispatch(setVendorListLoading({ loading: true }));
      const { page = 0, name = '', status = '', vendorTypeId = '' } = param;
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await API({
        method: 'post',
        url: '/v1/vendors',
        payload: { page: page - 1, name, status, vendorTypeId },
      });

      dispatch(
        setVendorList({
          list: response.data.data.vendors,
          totalPage: response.data.data.pagination.totalPage,
        })
      );
      dispatch(setVendorListLoading({ loading: false }));
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
    }
  };
