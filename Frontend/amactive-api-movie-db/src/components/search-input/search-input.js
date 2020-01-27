import React, { Component } from "react";
import ConsoleLog from "../../assets/console-log";

export default class SearchInput extends Component {
  render() {
    ConsoleLog("[SearchInput] render()...", this.props);
    // const siteData = this.props.siteData;
    // ConsoleLog("[SearchInput] render()... siteData = ", siteData);
    let query = this.props.query;

    return (
      <div className="list-wrap">
        <div className="list">
          <p>[3. list] query: {query}</p>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={this.props.changed}
          />
          <button
            disabled={query.length < 3}
            onClick={e => {
              this.props.handleClick(query);
            }}
          >
            Btn
          </button>
        </div>
      </div>
    );
  }
}
