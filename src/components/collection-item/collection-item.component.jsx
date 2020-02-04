import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.style.scss";

const CollectionItem = ({ id, image, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span>name</span>
        <span>price</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
