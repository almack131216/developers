import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div className="box-wrap">
        <div className="box">
          <p>[Box]</p>
          <button>Btn</button>
        </div>
      </div>
    );
  }
}
