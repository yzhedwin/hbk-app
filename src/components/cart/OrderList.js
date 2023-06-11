import Image from "mui-image";
import React from "react";

export default function OrderList(props) {
  const { order } = props;
  return order.map((o, index) => {
    return (
      <div key={index} className="cart-item-container">
        <Image
          className="cart-item-image"
          src={o.url}
          height={"10vh"}
          width={"10vh"}
        ></Image>
        <div className="cart-item-details">
          <div>Name: {o.name}</div>
          <div> Total: ${o.price}</div>
          <div> Qty: {o.quantity}</div>
        </div>
      </div>
    );
  });
}
