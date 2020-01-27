let defaultState = {
  itemId: null,
  result: {}
};

const itemReducer = (state = defaultState, action) => {
  //   console.log("itemReducer...");
  if (action.type === "POPULATE_ITEM") {
    // console.log("itemReducer ", action);
    return {
      ...state,
      itemId: action.itemId,
      result: action.result
    };
  } else {
    return {
      ...state
    };
  }
};

export default itemReducer;
