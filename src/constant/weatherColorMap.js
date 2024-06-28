export function weatherColorMap(currentWeatherInfo) {
  if (Number(currentWeatherInfo.temp) < 10) {
    return "#3572EF";
  }

  if (Number(currentWeatherInfo.temp) > 30) {
    return "#C80036";
  }

  return "#06D001";
}
