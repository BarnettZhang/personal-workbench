export function weatherColorMapFunc(currentWeatherInfo) {
  if (Number(currentWeatherInfo.temp) < 10) {
    return "#3572EF";
  }

  if (Number(currentWeatherInfo.temp) > 30) {
    return "#C80036";
  }

  return "#06D001";
}

export function weatherImageMapFunc(text) {
  if (typeof text !== "string") {
    return null;
  }

  if (text.includes("晴")) {
    return "src/assets/images/sunny.png";
  } else if (text.includes("雷")) {
    return "src/assets/images/thunder.png";
  } else if (text.includes("沙")) {
    return "src/assets/images/wind.png";
  } else if (text.includes("阴") || text.includes("云")) {
    return "src/assets/images/cloud.png";
  } else if (text.includes("雨")) {
    return "src/assets/images/rain.png";
  } else if (text.includes("雪")) {
    return "src/assets/images/snow.png";
  }
  return null;
}
