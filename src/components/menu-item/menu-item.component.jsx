import React from "react";
import "./menu-item.styles";

const MenuItem = ({ title, imageUrl, cta }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="menu-item"
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{cta}</span>
      </div>
    </div>
  );
};

export default MenuItem;
