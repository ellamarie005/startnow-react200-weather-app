const defaultState = {
  city: '',
  name: '',
  lat: '',
  long: '',
  temp: '',
  pressure: '',
  humidity: '',
  lowTemp: '',
  hightTemp: '',
  windSpeed: '',
  lineItems: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CITY_INFO': {
      return {
        ...state,
        city: payload
      };
    }

    case 'GET_WEATHER': {
      return {
        ...state,
        name: payload.name,
        lineItems: [
          ...state.lineItems,
          { name: payload.name }
        ]
      }
    }
    default: {
      return state;
    }
  }
}