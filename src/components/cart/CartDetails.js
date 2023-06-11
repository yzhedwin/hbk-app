import React from "react";
import OrderList from "./OrderList";
import { Button } from "@mui/material";

export default function CartDetails(props) {
  const { order } = props;
  return (
    <div className="cart-container">
      <div className="header">Checkout</div>
      <div className="order-list">
        <OrderList order={order} />
      </div>
      <div className="cart-pay-btn">
        <Button>Pay</Button>
      </div>
    </div>
  );
}
