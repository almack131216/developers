import axios from "axios";

export function loadResults(getS) {
  let s = getS ? getS : null;
  console.log("[loadResults] s = ", s);
  if (!s) {
    console.log("[loadResults] DO NOT LOAD because s = ", s);
    return dispatch => {
      return [];
    };
  }
  console.log("[loadResults] Generate api url based on s = ", s);
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&language=en-US&query=${s}&page=1&include_adult=false`;

  return dispatch => {
    return axios.get(apiUrl).then(response => {
      console.log(apiUrl);
      console.log(response.data);
      dispatch(populateList(response.data));
    });
  };
}

export function populateList(getList) {
  return {
    type: "POPULATE_LIST",
    results: getList
  };
}

/////////////////////////////////////////////////////////////////////////// FILTER items
export function handleFilterChange(event) {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = event.target.name;
  // const value = event.target.value;
  // console.log("[Context.js] handleFilterChange > this is type..." + type);
  console.log("[Context.js] handleFilterChange > " + name + " = " + value);
  // console.log("[Context.js] handleFilterChange > this is value..." + value);
  //   this.setState({
  //     [name]: value
  //   });
}
