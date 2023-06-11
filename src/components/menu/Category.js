import React from "react";
import ColorTabs from "../ColorTabs";

export default function Category(props) {
  const { handleMenuChange, menu } = props;
  return <ColorTabs handleMenuChange={handleMenuChange} menu={menu} />;
}
