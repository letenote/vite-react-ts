import { Dispatch } from '@reduxjs/toolkit';
import API from '../../../../../helper/API';
import { jwtDecode } from 'jwt-decode';
import { loadUserData, loginResponseParamType } from './login';
import { autoLogout } from './logout';

export const checkAuth = () => async (dispatch: Dispatch) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await API({
      method: 'post',
      url: '/v1/users/checkAuth',
      payload: { token: localStorage.getItem('_token') },
    });

    localStorage.setItem('_token', response.data.data.token);
    const decoded: loginResponseParamType = jwtDecode(response.data.data.token);

    return loadUserData(dispatch, decoded, response.data.message);
  } catch (error) {
    return autoLogout(dispatch, 'Session is expired');
  }
};
