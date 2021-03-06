import axios from 'axios';


export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    //had to change from http to https because heroku requires a secure pathway
    payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=fdeef49fa438b10fc897ec82d842b3d0`)
        //removed .then section so I can grab payload.data into my reducer
        // .then(res => { res.data, console.log(res.data) })
        // .catch(err => { console.log(err.message) })
  }
}

export function updateCityInfo(city) {
  return {
    type: 'UPDATE_CITY_INFO',
    payload: city
  };
}
