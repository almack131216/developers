let defaultState = {
  s: "",
  p: 1,
  results: {}
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "POPULATE_LIST") {
    console.log("mainReducer ", action);
    return {
      ...state,
      s: action.s,
      p: action.p,
      results: action.results
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
