import { getCurrentWeather } from "@/api/weather/weather.js";

export function getWeather() {
  getCurrentWeather({ location: 101010300 }).then((res) => {
    new window.Notification("朝阳当前天气", {
      body: `${res.now.text} ${res.now.temp}℃`,
    });
  });
}
