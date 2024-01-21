/* eslint-disable prefer-const */
import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../helper/API';
import { setSnackbar } from '../reducer/snackbar';
import request from 'axios';
import { ErrorResposeType } from '../../../../helper/useHttp';
import { AutocompleteInputTypes } from '../../../../components/Autocomplete/type/AutocompleteInputTypes.type';
import { AutocompleteInputTypeGenerate } from '../../../../components/Autocomplete/helper/AutocompleteInputTypeGenerate';
import { AutocompleteOptionsInterface } from '../interface/AutocompleteOptionsInterface.interface';
import {
  setAutocompleteOptions,
  setAutocompleteOptionsLoading,
} from '../reducer/autocompleteOptions';
import { AutocompleteInputType } from '../../../../components/Autocomplete/enum/AutocompleteInputType.enum';

type getAutocompleteOptionsType = {
  type: AutocompleteInputTypes;
};

export const getAutocompleteOptions =
  (param: getAutocompleteOptionsType) => async (dispatch: Dispatch) => {
    try {
      const _isAutocompleteOptionsType = AutocompleteInputTypeGenerate(
        param.type
      );

      let _payload: {
        page: number;
        size?: number;
        name: string;
        status: string;
        vendorTypeId?: string;
        departementId?: string;
        startDate?: string;
        endDate?: string;
        usedInTraining?: boolean;
      } = {
        page: 0,

        name: '',
        status: 'Active',
      };

      if (param.type === AutocompleteInputType.VENDOR) {
        _payload.vendorTypeId = 'All';
        _payload.size = 999;
      }

      if (param.type === AutocompleteInputType.USER) {
        _payload.departementId = 'All';
        _payload.size = 999;
      }

      if (param.type === AutocompleteInputType.BUDGET) {
        _payload.startDate = '';
        _payload.endDate = '';
        _payload.status = 'Approve';
        _payload.usedInTraining = true;
      }

      const response = await API({
        method: 'post',
        url: urlGetAutocompleteOptionsGenerate(_isAutocompleteOptionsType),
        payload: _payload,
      });
      console.log('getAutocompleteOptions:', { param, response });
      dispatch(
        setAutocompleteOptions({
          type: _isAutocompleteOptionsType,
          list: response.data.data[`${_isAutocompleteOptionsType}s`],
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(
        setAutocompleteOptionsLoading({
          type: _isAutocompleteOptionsType,
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
          setAutocompleteOptionsLoading({
            type: AutocompleteInputTypeGenerate(param.type),
            loading: false,
          })
        );
      }
    }
  };

const urlGetAutocompleteOptionsGenerate = (
  _isAutocompleteOptionsType: keyof AutocompleteOptionsInterface
): string => {
  switch (_isAutocompleteOptionsType) {
    case 'vendor':
      return `/v1/vendors`;
    case 'user':
      return `/v1/users`;
    case 'budget':
      return `/v1/budgets`;
    default:
      return `/`;
  }
};
