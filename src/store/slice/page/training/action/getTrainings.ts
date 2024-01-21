import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import request from 'axios';
import { setSnackbar } from '../../../components/reducer/snackbar';
import { ErrorResposeType } from '../../../../../helper/useHttp';
import { setTrainingList, setTrainingListLoading } from '../reducer';

type GetTrainingsParamType = {
  page: number;
  startDate?: string;
  endDate?: string;
  status?: string;
  name?: string;
};

export const getTrainings =
  (param: GetTrainingsParamType) => async (dispatch: Dispatch) => {
    try {
      const {
        page,
        startDate = '',
        endDate = '',
        status = '',
        name = '',
      } = param;
      dispatch(setTrainingListLoading({ loading: true }));
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await API({
        method: 'post',
        url: `/v1/trainings`,
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
        setTrainingList({
          list: response.data.data.trainings,
          totalPage: response.data.data.pagination.totalPage,
        })
      );
      dispatch(setTrainingListLoading({ loading: false }));
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
