import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setEmployeeTrainedData, setEmployeeTrainedLoading } from '../reducer';

export const getEmployeeTrainedMonitoring =
  () => async (dispatch: Dispatch) => {
    try {
      dispatch(setEmployeeTrainedLoading({ loading: true }));
      const response = await API({
        method: 'get',
        url: `/v1/monitorings/employee-trained`,
        payload: {},
      });

      dispatch(
        setEmployeeTrainedData({
          data: {
            value: response.data?.data?.user?.count?.employeeTrained ?? '0',
          },
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(setEmployeeTrainedLoading({ loading: false }));
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
