import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../helper/API';
import { SelectInputDialogTypes } from '../../../../components/SelectInputDialog/type/SelectInputDialogTypes.type';
import { selectInputDialogTypeGenerate } from '../../../../components/SelectInputDialog/helper/selectInputDialogTypeGenerate';
import {
  setSelectInputOptions,
  setSelectInputOptionsLading,
} from '../reducer/selectInputOptions';
import { setSnackbar } from '../reducer/snackbar';
import { SelectInputDialogFormsType } from '../../../../components/SelectInputDialog/type/SelectInputDialogFormsType.type';
import request from 'axios';
import { ErrorResposeType } from '../../../../helper/useHttp';
import { selectInputOptionsInterface } from '../interface/selectInputOptionsInterface.interface';

type addSelectInputOptionsType = {
  type: SelectInputDialogTypes;
  forms: SelectInputDialogFormsType;
  successCB: () => void;
  failedCB: () => void;
};

export const addSelectInputOptions =
  (param: addSelectInputOptionsType) => async (dispatch: Dispatch) => {
    try {
      const _isSelectInputDialogType = selectInputDialogTypeGenerate(
        param.type
      );

      const response = await API({
        method: 'post',
        url: urlRegisterSelectInputOptionsGenerate(_isSelectInputDialogType),
        payload: {
          name: param.forms.name.value,
        },
      });

      dispatch(
        setSelectInputOptions({
          type: _isSelectInputDialogType,
          list: [response.data.data],
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(
        setSelectInputOptionsLading({
          type: _isSelectInputDialogType,
          loading: false,
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

        dispatch(
          setSelectInputOptionsLading({
            type: selectInputDialogTypeGenerate(param.type),
            loading: false,
          })
        );
      }

      return param.failedCB();
    }
  };

const urlRegisterSelectInputOptionsGenerate = (
  _isSelectInputDialogType: keyof selectInputOptionsInterface
): string => {
  switch (_isSelectInputDialogType) {
    case 'trainingType':
      return `/v1/trainings/types/register`;
    case 'vendorType':
      return `/v1/vendors/types/register`;
    default:
      return `/v1/users/${_isSelectInputDialogType}s/register`;
  }
};
