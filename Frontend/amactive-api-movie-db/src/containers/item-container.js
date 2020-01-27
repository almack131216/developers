import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import ConsoleLog from "../assets/console-log";
import ItemDetails from "../pages/item-details";

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    ConsoleLog(
      "[ItemContainer] ",
      this.props.match.params.slug,
      "....",
      this.props.location
    );

    this.state = {
      itemId: this.props.match.params.slug
    };
  }

  componentDidMount = () => {
    ConsoleLog(
      "[ItemContainer] componentDidMount() > itemId = ",
      this.state.itemId
    );
    // this.setState({ itemId: getItemId });
    this.props.loadItem(this.state.itemId);
  };

  render() {
    return (
      <div>
        <p>[2. ItemContainer] itemId: {this.state.itemId}</p>
        {this.props.item.result.original_title}
        <ItemDetails
          itemId={this.state.itemId}
          itemArr={this.props.item.result}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(ItemContainer);
