import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Box from "../components/box";

class BoxContainer extends Component {
  render() {
    return (
      <div>
        <p>[BoxContainer]</p>
        <Box
          handleClick={this.props.loadResults}
          results={this.props.results}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
