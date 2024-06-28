import { request } from "./_service";
import { key } from "@/constant/weatherAPI.js";

const BASE_URL = "/v7/weather";

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
