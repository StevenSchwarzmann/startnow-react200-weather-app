const defaultState = {
  city: {
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0,
      wind: 0
    }
  },
  history: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CITY": {
      return {
        ...state,
        city: payload
      };
      break;
    }
    case "UPDATE_SEARCH_FULFILLED": {
      console.log("payload.data", payload.data);
      console.log("Humidity", payload.data.main.humidity);
      return {
        ...state,
        city: payload.data
      };
      break;
    }

    case "UPDATE_HISTORY": {
      return {
        ...state,
        history: [...state.history, payload]
      };
      break;
    }
    default: {
      return state;
    }
  }
}
