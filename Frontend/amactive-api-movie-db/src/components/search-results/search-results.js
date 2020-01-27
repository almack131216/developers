import React, { Component } from "react";
import ConsoleLog from "../../assets/console-log";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";

export default class List extends Component {
  render() {
    ConsoleLog("[list.js] render()...", this.props);
    // const siteData = this.props.siteData;
    // ConsoleLog("[list.js] render()... siteData = ", siteData);
    const {
      page: pageActive,
      total_results,
      total_pages,
      results
    } = this.props.results;

    return (
      <div className="list-wrap">
        <div className="list-results">
          <h1>Search results</h1>
          <ul>
            <li>page: {pageActive}</li>
            <li>total_results: {total_results}</li>
            <li>total_pages: {total_pages}</li>
          </ul>
          {results && results.length > 0
            ? results.map((item, index) => {
                // ConsoleLog(item.title);
                return (
                  <li key={index}>
                    <div style={{ display: "block" }}>
                      <div style={{ display: "inline-block", width: "30%" }}>
                        <Link to={`/movie/${item.id}`}>
                          <img
                            style={{ width: "100%", height: "auto" }}
                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                            alt={item.title}
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
