import axios from 'axios';

export function updateCityInfo(city) {
  return {
    type: 'UPDATE_CITY_INFO',
    payload: city
  };
}

export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    payload:
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=APIKEY`)
        //removed .then section so I can grab payload.data into my reducer
        // .then(res => { res.data, console.log(res.data) })
        // .catch(err => { console.log(err.message) })
  }
}