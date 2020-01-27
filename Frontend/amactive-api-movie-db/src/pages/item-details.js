import React, { Component } from "react";
import BtnBack from "../components/btn-back/btn-back";

export default class ItemDetails extends Component {
  render() {
    console.log("[item-details.js] render()...", this.props);
    const { title } = this.props.itemArr;

    return (
      <>
        <h1>item details: {title}</h1>
        <BtnBack />
      </>
    );
  }
}
