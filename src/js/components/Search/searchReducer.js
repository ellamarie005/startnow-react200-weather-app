const defaultState = {
  city: '',
  //name equal to ''(string), but need to change into object
  name: {},
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

    case 'GET_WEATHER_FULFILLED': {
      //grabbing the data that's being pulled from the get weather action
      return {
        ...state,
        name: payload.data,
        lineItems: [...state.lineItems, payload.data.name]
      };
    }

    default: {
      return state;
    }
  }
}