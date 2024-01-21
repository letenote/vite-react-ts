import { Dispatch } from "@reduxjs/toolkit";
import API from "../../../../../helper/API";
import request from "axios";
import { setSnackbar } from "../../../components/reducer/snackbar";
import { ErrorResposeType } from "../../../../../helper/useHttp";
import { setTrainingDetailData, setTrainingDetailLoading } from "../reducer";
import { TrainingDetailReducerInterface } from "../interface/PageTrainingReducerInterface.interface";

type GetTrainingParamType = {
  id: string;
  successCB?: (data: TrainingDetailReducerInterface) => void;
  failedCB?: () => void;
};

export const getTraining =
  (param: GetTrainingParamType) => async (dispatch: Dispatch) => {
    try {
      const { id = "" } = param;
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await API({
        method: "post",
        url: `/v1/trainings/current`,
        payload: {
          id,
        },
      });

      console.log("response", { response, param });
      dispatch(
        setTrainingDetailData({
          data: response.data.data,
        })
      );
      dispatch(setTrainingDetailLoading({ loading: false }));
      return param.successCB && param.successCB(response.data.data);
      // return param.successCB(
      //   response?.data?.data || {
      //     id: "",
      //     name: "",
      //     createdAt: "",
      //     startDate: "",
      //     endDate: "",
      //     objective: "",
      //     duration: "",
      //     createdBy: {
      //       id: "",
      //       name: "",
      //       departement: {
      //         id: "",
      //         name: "",
      //       },
      //     },
      //     budget: {
      //       name: "",
      //       id: "",
      //       code: "",
      //       cost: "",
      //       requestBy: {
      //         id: "",
      //         name: "",
      //         createdAt: "",
      //       },
      //     },
      //     trainingType: {
      //       id: "",
      //       name: "",
      //     },
      //     participants: [],
      //     payments: [],
      //   }
      // );
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        console.log("errr", (error.response?.data as ErrorResposeType).error);
        dispatch(
          setSnackbar({
            open: true,
            autoHideDuration: 3000,
            severity: "warning",
            message: error.message,
          })
        );
      }
      return param.failedCB && param.failedCB();
    }
  };
