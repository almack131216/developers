import axios from "axios";
import ConsoleLog from "../assets/console-log";

export function loadResults(getQuery, getPage) {
  let query = getQuery ? getQuery : null;
  let page = getPage ? getPage : null;
  ConsoleLog("[loadResults] query = ", query, ", page = ", page);
  if (!query) {
    ConsoleLog(
      "[loadResults] DO NOT LOAD because query = ",
      query,
      ", page = ",
      page
    );
    return dispatch => {
      return [];
    };
  }
  ConsoleLog(
    "[loadResults] Generate api url based on query = ",
    query,
    ", page = ",
    page
  );
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&language=en-US&query=${query}&page=${page}&include_adult=false`;

  return dispatch => {
    return axios.get(apiUrl).then(response => {
      ConsoleLog("[actions] apiUrl = ", apiUrl);
      ConsoleLog("[actions] response.data = ", response.data);
      dispatch(populateList(query, page, response.data));
    });
  };
}

export function populateList(getQuery, getPage, getList) {
  return {
    type: "POPULATE_LIST",
    query: getQuery,
    page: getPage,
    resp: getList
  };
}

// details
export function loadItem(getId) {
  let itemId = getId ? getId : null;

  ConsoleLog("[loadItem] itemId = ", itemId);
  if (!itemId) {
    ConsoleLog("[loadItem] DO NOT LOAD because itemId is not set");
    return dispatch => {
      return [];
    };
  }
  ConsoleLog("[loadResults] Generate api url based on itemId = ", itemId);
  const apiUrl = `https://api.themoviedb.org/3/movie/${itemId}?api_key=03b8572954325680265531140190fd2a&language=en-US`;

  return dispatch => {
    return axios.get(apiUrl).then(response => {
      ConsoleLog("[actions] apiUrl = ", apiUrl);
      ConsoleLog("[actions] response.data = ", response.data);
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
