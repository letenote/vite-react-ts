import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MenuType,
  setAuthedPayloadType,
  userReducerInterface,
} from '../interface/userReducerInterface.interface';

const menuDefault: Array<MenuType> = [
  {
    isParent: true,
    isChild: false,
    name: 'Setting',
    label: 'Setting',
    href: '/setting',
  },
  {
    isParent: true,
    isChild: false,
    name: 'Logout',
    label: 'Logout',
    href: '/login',
  },
];

const initialState: userReducerInterface = {
  authed: false,
  name: '',
  email: '',
  gender: '',
  id: '',
  nik: '',
  role: '',
  departement: '',
  permissions: [],
  configLoaded: false,
  config: {
    menus: [],
  },
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthed: (state, action: PayloadAction<setAuthedPayloadType>) => {
      state.authed = action.payload.authed;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.id = action.payload.id;
      state.nik = action.payload.nik;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
      state.departement = action.payload.departement;
      if (!action.payload.authed) {
        state.configLoaded = false;
        state.config.menus = [...menuDefault];
      }
    },
    setConfig: (
      state,
      action: PayloadAction<{ configLoaded: boolean; menus: Array<MenuType> }>
    ) => {
      state.configLoaded = action.payload.configLoaded;
      state.config.menus = [...action.payload.menus, ...menuDefault];
    },
  },
});

export const { setAuthed, setConfig } = UserSlice.actions;
export default UserSlice.reducer;
