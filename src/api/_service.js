import axios from "axios";
import { get, isEmpty, merge } from "lodash";
import qs from "qs";

let customHandlerError = false;

function stringify(data) {
  return qs.stringify(data, { allowDots: true, encode: false });
}

function createService() {
  const service = axios.create();

  service.interceptors.request.use(
    (config) => {
      customHandlerError = config.data.customHandlerError;
      return config;
    },
    (error) => {
      console.warn(error);
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response) => {
      return response?.data;
    },
    async (error) => {
      const status = get(error, "response.status");
      const data = get(error, "response.data");

      switch (status) {
        case 400:
          error.message = "400错误";
        case 401:
          error.message = "401错误";
        case 403:
          error.message = "403错误";
        case 404:
          error.message = "404错误";
        case 408:
          error.message = "408错误";
        case 500:
          error.message = "500错误";
        case 501:
          error.message = "501错误";
        case 502:
          error.message = "502错误";
        case 503:
          error.message = "503错误";
        case 504:
          error.message = "504错误";
        case 505:
          error.message = "505错误";
        default:
          break;
      }

      throw error;
    }
  );
  return service;
}

function createRequest(service) {
  return function (config) {
    if (!config.baseURL && config.baseURL !== "" && config.baseURL !== false) {
      config.baseURL = process.env.VUE_APP_API;
    }

    const configDefault = {
      headers: {
        "Content-Type": get(config, "headers.Content-Type", "application/json"),
      },
      timeout: 120000,
      baseURL: config.baseURL,
      data: {},
    };

    const option = merge(configDefault, config);

    if (!isEmpty(option.params)) {
      option.url = option.url + "?" + stringify(option.params);
      option.params = {};
    }

    if (
      !isEmpty(option.data) &&
      option.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      option.data = stringify(option.data);
    }
    return service(option);
  };
}

export const service = createService();
export const request = createRequest(service);
