import React, { Component } from "react";
import BtnBack from "../components/btn-back/btn-back";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);

    this.state = {
      itemPrimary: {}
    };
  }

  // API - componentDidMount
  async componentDidMount() {
    // console.log("[ItemDetails.js] componentDidMount()...");
    this.setState({ loading: true });
    await fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("[ItemDetails.js] componentDidMount() data: ", data);
        let [itemPrimary, ...itemImageAttachments] = data;
        itemPrimary.title = itemPrimary.year
          ? `${itemPrimary.year} ${itemPrimary.name}`
          : itemPrimary.name;
        itemPrimary.itemPath = this.state.path;
        itemPrimary.imagePath =
          process.env.REACT_APP_IMG_DIR_LARGE + itemPrimary.image;

        const itemImages = [itemPrimary, ...itemImageAttachments];
        this.setState({ itemPrimary, itemImages, loading: false });
      })
      .catch(() => {
        this.setState({ fetchError: this.strItemNotFound, loading: false });
        // setDocumentTitle(this.strItemNotFound);
      });
  }

  render() {
    return (
      <>
        <h1>item details</h1>
        <BtnBack />
      </>
    );
  }
}
