import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../preview-collection/preview-collection";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;

    return (
      <div>
        <h1>Shop Page</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
