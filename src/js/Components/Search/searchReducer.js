const defaultState = {
  city: {},
  history: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH": {
      console.log("payload.data", payload.data)
      return {
        ...state,
        city: payload.data
      };
      break;
    }
    //add history?
    case "UPDATE_TEXT": {
      return {
        ...state,
        history: [
          ...state.history,
          payload
        ]
      };
      break;
    }
    default: {
      return state;
    }
  }
}
