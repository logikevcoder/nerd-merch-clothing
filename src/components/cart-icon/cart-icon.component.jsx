import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapStateToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapStateToProps)(CartIcon);
