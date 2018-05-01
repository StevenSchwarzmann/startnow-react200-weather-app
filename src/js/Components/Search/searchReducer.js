const defaultState = {
  city: {},
  history: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH_FULFILLED": {
      console.log("payload.data", payload.data)
      return {
        ...state,
        city: payload.data
      };
      break;
    }

    case "ADD_HISTORY": {
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
