let defaultState = {
  results: {}
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "POPULATE_LIST") {
    return {
      ...state,
      results: action.results
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
