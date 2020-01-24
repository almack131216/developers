import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Box from "../components/box";

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    console.log("[BoxContainer] ", props);
    this.state = {
      query: props.query,
      page: props.page
    };
  }

  handleFilterChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    console.log("[BoxContainer] handleFilterChange > " + name + " = " + value);
    this.setState({ [name]: value });
  };

  goToPage = getPage => {
    console.log("[BoxContainer] goToPage > page = " + getPage);
    this.props.loadResults(this.state.query, getPage);
  };

  render() {
    return (
      <div>
        <p>
          [2. BoxContainer] query: {this.state.query}, page: {this.state.page}
        </p>
        <Box
          handleClick={() => this.props.loadResults(this.state.query, 1)}
          handlePageChange={p => this.goToPage(p)}
          p={this.state.page}
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
