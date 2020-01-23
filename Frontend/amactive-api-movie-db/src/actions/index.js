import axios from "axios";

export function loadResults() {
  return dispatch => {
    return axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=03b8572954325680265531140190fd2a&language=en-US&query=star&page=1&include_adult=false"
      )
      .then(response => {
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
