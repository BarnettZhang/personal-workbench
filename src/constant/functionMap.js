import { nativePick } from "@/utils/colorPicker";
import { getWeather } from "@/utils/weather.js";

export const functionMap = [
  {
    id: 1,
    functionKey: "colorPicker",
    functionName: "拾色器",
    iconName: "color-picker",
    iconColor: "#e589b1",
    routeName: "colorPicker",
    quickAccess: nativePick,
  },
  {
    id: 2,
    functionKey: "weather",
    functionName: "天气",
    iconName: "daytime-mode-fill",
    iconColor: "#EF9C66",
    routeName: "weather",
    quickAccess: getWeather,
  },
  {
    id: 3,
    functionKey: "hots",
    functionName: "集锦",
    iconName: "hots",
    iconColor: "#4dd7f9",
    routeName: "hots",
    quickAccess: getWeather,
  },
];
