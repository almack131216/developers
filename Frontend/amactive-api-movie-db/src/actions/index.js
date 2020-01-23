import axios from "axios";

export function loadMovie() {
  return dispatch => {
    return axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&language=en-US&query=star&page=1&include_adult=false"
      )
      .then(response => {
        dispatch(populateList(response.data));
      });
  };
}

export function populateList(getList) {
  return {
    type: "POPULATE_LIST",
    results: getList
    // page: getList.page,
    // total_results: getList.total_results,
    // total_pages: getList.total_pages,
    // list: getList.results
  };
}
