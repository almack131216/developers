import React, { Component } from "react";
import parse from "html-react-parser";

export default class Box extends Component {
  render() {
    const { page, total_results, total_pages, results } = this.props.results;
    let s = this.props.s;
    let p = this.props.p ? this.props.p : 1;

    return (
      <div className="box-wrap">
        <div className="box">
          <p>
            [3. Box] s: {s}, p: {p}
          </p>
          <input
            type="text"
            name="s"
            id="s"
            value={s}
            onChange={this.props.changed}
          />
          <button
            onClick={e => {
              this.props.handleClick(s);
            }}
          >
            Btn
          </button>
        </div>
        <div className="box-results">
          <h1>Search results</h1>
          {/* {this.props.results} */}
          <ul>
            <li>
              page: {page}{" "}
              <button
                onClick={e => {
                  this.props.handlePageChange(1);
                }}
              >
                1
              </button>
              {total_pages > 1 ? (
                <button
                  onClick={e => {
                    this.props.handlePageChange(2);
                  }}
                >
                  2
                </button>
              ) : null}
              {total_pages > 2 ? (
                <button
                  onClick={e => {
                    this.props.handlePageChange(3);
                  }}
                >
                  3
                </button>
              ) : null}
            </li>
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
                        <img
                          style={{ width: "100%", height: "auto" }}
                          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                        />
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
