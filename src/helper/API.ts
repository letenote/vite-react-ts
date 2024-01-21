import { AxiosPromise } from "axios";
import { useHttp } from "./useHttp";

type API_Props = {
  method: "post" | "get" | "delete";
  url: string;
  payload: object;
};

const API = (param: API_Props): AxiosPromise => {
  const options = {
    method: param.method,
    url: param.url,
    baseURL: baseUrlController(),
    data:
      param.payload === null || param.payload === undefined
        ? {}
        : param.payload,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("_token"),
    },
  };

  return useHttp(options);
};

const baseUrlController = (): string => {
  switch (import.meta.env.MODE) {
    case "DOCKER-DEV":
      return "http://localhost:3050/api";
    case "PROD_LOCAL":
      return "https://hh6gkncm-5000.asse.devtunnels.ms/";
    case "PROD":
      // return 'http://localhost:80/api';
      return "https://training-budget.my.id/api";
    default:
      return "http://localhost:5000";
  }
};

export default API;
