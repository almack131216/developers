import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { page, total_results, total_pages } = this.props.results;
    let s = this.props.s;

    return (
      <div className="box-wrap">
        <div className="box">
          <p>[Box]</p>
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
            <li>page: {page}</li>
            <li>total_results: {total_results}</li>
            <li>total_pages: {total_pages}</li>
            {/* <li>results: {results}</li> */}
          </ul>
        </div>
      </div>
    );
  }
}
