import React, { Component } from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";

export default class Box extends Component {
  render() {
    console.log("[box.js] render()...");
    // const siteData = this.props.siteData;
    // console.log("[box.js] render()... siteData = ", siteData);
    const {
      page: pageActive,
      total_results,
      total_pages,
      results
    } = this.props.results;
    let query = this.props.query;
    let page = this.props.page ? this.props.page : 1;

    return (
      <div className="box-wrap">
        <div className="box">
          <p>
            [3. Box] query: {query}, page: {page}
          </p>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={this.props.changed}
          />
          <button
            onClick={e => {
              this.props.handleClick(query);
            }}
          >
            Btn
          </button>
        </div>
        <div className="box-results">
          <h1>Search results</h1>

          {/* {this.props.results} */}
          <ul>
            <li>page: {pageActive}</li>
            <li>total_results: {total_results}</li>
            <li>total_pages: {total_pages}</li>
            {/* <li>results: {results}</li> */}
          </ul>
          {results && results.length > 0
            ? results.map((item, index) => {
                // console.log(item.title);
                return (
                  <li key={index}>
                    <div style={{ display: "block" }}>
                      <div style={{ display: "inline-block", width: "30%" }}>
                        <Link to={`/movie/${item.id}`}>
                          <img
                            style={{ width: "100%", height: "auto" }}
                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                          />
                        </Link>
                      </div>
                      <div style={{ display: "inline-block", width: "70%" }}>
                        <h3>{item.title}</h3>
                        <p>{item.overview}</p>
                      </div>
                    </div>
                  </li>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
