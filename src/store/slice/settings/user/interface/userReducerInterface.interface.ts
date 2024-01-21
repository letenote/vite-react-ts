export interface userReducerInterface {
  authed: boolean;
  name: string;
  email: string;
  gender: string;
  id: string;
  nik: string;
  role: string;
  departement: string;
  permissions: Array<string>;
  configLoaded: boolean;
  config: {
    menus: Array<MenuType>;
  };
}

export type MenuType = {
  isParent: boolean;
  isChild: boolean;
  name: string;
  label: string;
  href: string;
};

export type setAuthedPayloadType = {
  authed: boolean;
  name: string;
  email: string;
  gender: string;
  id: string;
  nik: string;
  role: string;
  permissions: Array<string>;
  departement: string;
};
