import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Box from "../components/box";

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    // this.s = props.s;
    console.log("[BoxContainer] ", props);
    this.state = {
      s: props.s
    };
  }

  handleFilterChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    console.log("[BoxContainer] handleFilterChange > " + name + " = " + value);
    this.state[name] = value;
  };

  render() {
    return (
      <div>
        <p>[BoxContainer] {this.state.s}</p>
        <Box
          handleClick={s => this.props.loadResults(this.state.s)}
          results={this.props.results}
          changed={this.handleFilterChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
