import axios from "axios";

export function loadResults(getS, getP) {
  let s = getS ? getS : null;
  let p = getP ? getP : 1;
  console.log("[loadResults] s = ", s, ", p = ", p);
  if (!s) {
    console.log("[loadResults] DO NOT LOAD because s = ", s, ", p = ", p);
    return dispatch => {
      return [];
    };
  }
  console.log("[loadResults] Generate api url based on s = ", s, ", p = ", p);
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&language=en-US&query=${s}&page=${p}&include_adult=false`;

  return dispatch => {
    return axios.get(apiUrl).then(response => {
      console.log("[actions] apiUrl = ", apiUrl);
      console.log("[actions] response.data = ", response.data);
      dispatch(populateList(s, p, response.data));
    });
  };
}

export function populateList(getS, getP, getList) {
  return {
    type: "POPULATE_LIST",
    s: getS,
    p: getP,
    results: getList
  };
}
