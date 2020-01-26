let defaultState = {
  query: "",
  page: 1,
  results: {}
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "POPULATE_LIST") {
    console.log("mainReducer ", action);
    return {
      ...state,
      query: action.query,
      page: action.page,
      results: action.results
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
