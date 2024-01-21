import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../helper/API';
import { SelectInputDialogTypes } from '../../../../components/SelectInputDialog/type/SelectInputDialogTypes.type';
import { selectInputDialogTypeGenerate } from '../../../../components/SelectInputDialog/helper/selectInputDialogTypeGenerate';
import {
  setSelectInputOptionsLading,
  updateSelectInputOptions,
} from '../reducer/selectInputOptions';
import { setSnackbar } from '../reducer/snackbar';
import request from 'axios';
import { ErrorResposeType } from '../../../../helper/useHttp';
import { selectInputOptionsInterface } from '../interface/selectInputOptionsInterface.interface';

type updateSelectInputOptionType = {
  type: SelectInputDialogTypes;
  id: string;
  name: string;
  successCB: () => void;
};

export const updateSelectInputOption =
  (param: updateSelectInputOptionType) => async (dispatch: Dispatch) => {
    try {
      const _isSelectInputDialogType = selectInputDialogTypeGenerate(
        param.type
      );
      await API({
        method: 'post',
        url: urlUpdateSelectInputOptionsGenerate(_isSelectInputDialogType),
        payload: {
          id: param.id,
          name: param.name,
        },
      });
      dispatch(
        updateSelectInputOptions({
          type: _isSelectInputDialogType,
          id: param.id,
          name: param.name,
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'success',
          message: `Success update ${_isSelectInputDialogType}`,
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
    }
  };

const urlUpdateSelectInputOptionsGenerate = (
  _isSelectInputDialogType: keyof selectInputOptionsInterface
): string => {
  switch (_isSelectInputDialogType) {
    case 'trainingType':
      return `/v1/trainings/types/update`;
    case 'vendorType':
      return `/v1/vendors/types/update`;
    default:
      return `/v1/users/${_isSelectInputDialogType}s/update`;
  }
};
