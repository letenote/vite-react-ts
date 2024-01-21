import { Dispatch } from "@reduxjs/toolkit";
import { setAuthed } from "../reducer/user";
import { setSnackbar } from "../../../components/reducer/snackbar";
import API from "../../../../../helper/API";

export const logout = () => async (dispatch: Dispatch) => {
  try {
    await API({
      method: "post",
      url: "/v1/users/logout",
      payload: {},
    });

    return autoLogout(dispatch, "User success logout");
  } catch (error) {
    return autoLogout(dispatch, "User success logout");
  }
};

export const autoLogout = async (dispatch: Dispatch, message: string) => {
  dispatch(
    setSnackbar({
      open: true,
      autoHideDuration: 3000,
      severity: "info",
      message,
    })
  );

  localStorage.removeItem("_token");
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dispatch(
    setAuthed({
      authed: false,
      name: "",
      email: "",
      gender: "",
      id: "",
      nik: "",
      role: "",
      departement: "",
      permissions: [],
    })
  );
};
