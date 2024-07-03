import { request } from "../_service";
import { key } from "@/constant/weatherAPI.js";

const BASE_URL = "/v7/weather";

/**
 * @description 获取当前天气
 */
export function getCurrentWeather(params) {
  return request({
    url: BASE_URL + "/now",
    method: "get",
    params: {
      ...params,
      key,
    },
  });
}

/**
 * @description 获取未来24小时逐时天气
 */
export function get24hWeather(params) {
  return request({
    url: BASE_URL + "/24h",
    method: "get",
    params: {
      ...params,
      key,
    },
  });
}
