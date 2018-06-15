import axios from 'axios';

export function updateNameInfo(name) {
  return {
    type: 'UPDATE_NAME_INFO',
    payload: { name }
  };
}

// export function updateHistory(name) {
//   return {
//     type: 'UPDATE_HISTORY',
//     payload: { name }
//   };
// }

export function addName(name) {
  return {
    type: 'ADD_NAME',
    payload: {
      name
    }
  }
}

export function getWeather(name) {
  console.log(name)
  return {
    type: 'GET_WEATHER',
    payload:
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=APIKEY`)
        .then(res => { res.data, console.log(res.data) })
        .catch(err => {console.log(err.message)})
  }
}