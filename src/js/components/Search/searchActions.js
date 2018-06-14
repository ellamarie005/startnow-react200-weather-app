export function updateWeatherInfo(name) {
  return {
    type: 'UPDATE_WEATHER_INFO',
    payload: { name }
  };
}

export function updateHistory(name) {
  return {
    type: 'UPDATE_HISTORY',
    payload: { name }
  };
}

export function addCity(name) {
  return {
    type: 'ADD_CITY',
    payload: {
      name
    }
  }
}