import { request } from "../_service";
import { key } from "@/constant/weatherAPI.js";

const BASE_URL = "/v7/warning";

export function getCurrentWarning(params) {
  return request({
    url: BASE_URL + "/now",
    method: "get",
    params: {
      ...params,
      key,
    },
  });
}
