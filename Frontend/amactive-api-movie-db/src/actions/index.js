import axios from "axios";

export function loadResults(getQuery, getPage) {
  let query = getQuery ? getQuery : null;
  let page = getPage ? getPage : null;
  console.log("[loadResults] query = ", query, ", page = ", page);
  if (!query) {
    console.log(
      "[loadResults] DO NOT LOAD because query = ",
      query,
      ", page = ",
      page
    );
    return dispatch => {
      return [];
    };
  }
  console.log(
    "[loadResults] Generate api url based on query = ",
    query,
    ", page = ",
    page
  );
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&language=en-US&query=${query}&page=${page}&include_adult=false`;

  return dispatch => {
    return axios.get(apiUrl).then(response => {
      console.log("[actions] apiUrl = ", apiUrl);
      console.log("[actions] response.data = ", response.data);
      dispatch(populateList(query, page, response.data));
    });
  };
}

export function populateList(getQuery, getPage, getList) {
  return {
    type: "POPULATE_LIST",
    query: getQuery,
    page: getPage,
    results: getList
  };
}

// details
export function loadItem(getId) {
  let itemId = getId ? getId : null;

  console.log("[loadItem] itemId = ", itemId);
  if (!itemId) {
    console.log("[loadItem] DO NOT LOAD because itemId is not set");
    return dispatch => {
      return [];
    };
  }
  console.log("[loadResults] Generate api url based on itemId = ", itemId);
  const apiUrl = `https://api.themoviedb.org/3/movie/${itemId}?api_key=03b8572954325680265531140190fd2a&language=en-US`;

  return dispatch => {
    return axios.get(apiUrl).then(response => {
      console.log("[actions] apiUrl = ", apiUrl);
      console.log("[actions] response.data = ", response.data);
      dispatch(populateItem(response.data));
    });
  };
}

export function populateItem(getItem) {
  return {
    type: "POPULATE_ITEM",
    result: getItem
  };
}
