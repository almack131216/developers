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
      s: props.s,
      p: props.p
    };
  }

  handleFilterChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    console.log("[BoxContainer] handleFilterChange > " + name + " = " + value);
    this.setState({ [name]: value });
  };

  goToPage = getP => {
    console.log("[BoxContainer] goToPage > p = " + getP);
    // this.setState({ p: getP });
    this.props.loadResults(this.state.s, getP);
  };

  render() {
    return (
      <div>
        <p>
          [2. BoxContainer] s: {this.state.s}, p: {this.state.p}
        </p>
        <Box
          handleClick={s => this.props.loadResults(this.state.s, 1)}
          handlePageChange={p => this.goToPage(p)}
          p={this.state.p}
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
