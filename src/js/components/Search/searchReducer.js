const defaultState = {
  city: '',
  lineItems: []
};

export default function SearchReducer(state = defaultState, action) {
  const {type, payload} =action;

  switch (type) {
    case 'UPDATE_WEATHER_INFO': {
      return {
        ...state,
        name: payload.name
      };
    }

    case 'UPDATE_HISTORY': {
      return {
        ...state,
        name: payload.name
      };
    }

    case 'ADD_CITY': {
      const {name} = action.payload;
      return {
        name:'',
        lineItems: [
          ...state.lineItems,
          {name}
        ]
      }
    }

    default: {
      return state;
    }
  }
}