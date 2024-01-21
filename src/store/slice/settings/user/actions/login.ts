import { Dispatch } from '@reduxjs/toolkit';
import { setAuthed, setConfig } from '../reducer/user';
import { jwtDecode } from 'jwt-decode';
import API from '../../../../../helper/API';
import { MenuType } from '../interface/userReducerInterface.interface';
import { capitalizeFirstLetter } from '../../../../../helper/populateString';
import { setSnackbar } from '../../../components/reducer/snackbar';

type loginActionParam = {
  email: string;
  password: string;
};

export type loginResponseParamType = {
  email: string;
  name: string;
  gender: string;
  id: string;
  nik: string;
  role: string;
  permissions: Array<string>;
  departement: string;
};

export const login =
  (param: { data: loginActionParam; failCB: () => void }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await API({
        method: 'post',
        url: '/v1/users/login',
        payload: { password: param.data.password, email: param.data.email },
      });

      localStorage.setItem('_token', response.data.data.token);
      const decoded: loginResponseParamType = jwtDecode(
        response.data.data.token
      );

      return loadUserData(dispatch, decoded, response.data.message);
    } catch (error) {
      dispatch(
        setSnackbar({
          open: true,
          autoHideDuration: 3000,
          severity: 'warning',
          message: 'Wrong email or password',
        })
      );
      return param.failCB();
    }
  };

export const loadUserData = async (
  dispatch: Dispatch,
  decoded: loginResponseParamType,
  message: string
) => {
  dispatch(
    setAuthed({
      authed: true,
      name: decoded.name,
      email: decoded.email,
      gender: decoded.gender,
      id: decoded.id,
      nik: decoded.nik,
      role: decoded.role,
      permissions: decoded.permissions,
      departement: decoded.departement,
    })
  );

  const menus: Array<MenuType> = decoded.permissions.map((permission) => {
    const getName = permission.split('/');
    return {
      isParent: getName.length === 1 ? true : false,
      isChild: getName.length > 1 ? true : false,
      name: capitalizeFirstLetter(getName[0]),
      label: capitalizeFirstLetter(getName[0]),
      href: `/${permission}`,
    };
  });

  dispatch(
    setSnackbar({
      open: true,
      autoHideDuration: 5000,
      severity: 'success',
      message: message,
    })
  );
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dispatch(setConfig({ configLoaded: true, menus }));
};
