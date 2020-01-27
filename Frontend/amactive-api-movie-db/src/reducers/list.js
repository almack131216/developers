let defaultState = {
  query: "",
  page: 1,
  resp: []
};

const listReducer = (state = defaultState, action) => {
  // console.log("listReducer...");
  if (action.type === "POPULATE_LIST") {
    // console.log("listReducer ", action);
    return {
      ...state,
      query: action.query,
      page: action.page,
      resp: action.resp
    };
  } else {
    return {
      ...state
    };
  }
};

export default listReducer;
