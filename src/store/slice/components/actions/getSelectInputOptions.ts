import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../helper/API';
import { SelectInputDialogTypes } from '../../../../components/SelectInputDialog/type/SelectInputDialogTypes.type';
import { selectInputDialogTypeGenerate } from '../../../../components/SelectInputDialog/helper/selectInputDialogTypeGenerate';
import {
  setSelectInputOptions,
  setSelectInputOptionsLading,
} from '../reducer/selectInputOptions';
import { setSnackbar } from '../reducer/snackbar';
import request from 'axios';
import { ErrorResposeType } from '../../../../helper/useHttp';
import { selectInputOptionsInterface } from '../interface/selectInputOptionsInterface.interface';

type getSelectInputOptionsType = {
  type: SelectInputDialogTypes;
};

export const getSelectInputOptions =
  (param: getSelectInputOptionsType) => async (dispatch: Dispatch) => {
    try {
      const _isSelectInputDialogType = selectInputDialogTypeGenerate(
        param.type
      );
      const response = await API({
        method: 'post',
        url: urlGetSelectInputOptionsGenerate(_isSelectInputDialogType),
        payload: { page: 0 },
      });
      console.log('getSelectInputOptions:', { param, response });
      dispatch(
        setSelectInputOptions({
          type: _isSelectInputDialogType,
          list: response.data.data[`${_isSelectInputDialogType}s`],
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(
        setSelectInputOptionsLading({
          type: _isSelectInputDialogType,
          loading: false,
        })
      );
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

        dispatch(
          setSelectInputOptionsLading({
            type: selectInputDialogTypeGenerate(param.type),
            loading: false,
          })
        );
      }
    }
  };

const urlGetSelectInputOptionsGenerate = (
  _isSelectInputDialogType: keyof selectInputOptionsInterface
): string => {
  switch (_isSelectInputDialogType) {
    case 'trainingType':
      return `/v1/trainings/types`;
    case 'vendorType':
      return `/v1/vendors/types`;
    default:
      return `/v1/users/${_isSelectInputDialogType}s`;
  }
};
