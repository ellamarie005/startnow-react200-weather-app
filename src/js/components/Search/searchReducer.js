const defaultState = {
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
    case 'UPDATE_NAME_INFO': {
      return {
        ...state,
        name: payload
      };
    }

    // case 'UPDATE_HISTORY': {
    //   return {
    //     ...state,
    //     name: payload.name
    //   };
    // }

    // case 'SEARCH_NAME': {
    //   const { name } = action.payload;
    //   return {
    //     name: '',
    //     lineItems: [
    //       ...state.lineItems,
    //       { name }
    //     ]
    //   };
    // }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        name: name,
      }
    }
    default: {
      return state;
    }
  }
}