let defaultState = {
  query: "",
  page: 1,
  results: []
};

const listReducer = (state = defaultState, action) => {
  console.log("listReducer...");
  if (action.type === "POPULATE_LIST") {
    console.log("listReducer ", action);
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

export default listReducer;
