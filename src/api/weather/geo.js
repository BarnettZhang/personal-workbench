import { request } from "../_service";
import { key } from "@/constant/weatherAPI.js";

const BASE_URL = "/api/geo";

/**
 *
 * @param location: 中国城市地区（中文、拼音都可）
 * @param adm：上级区划
 */
export function getGeoInfo(params) {
  return request({
    url: BASE_URL + "/city/lookup",
    method: "get",
    params: {
      ...params,
      key,
    },
  });
}
