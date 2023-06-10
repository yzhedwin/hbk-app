import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

export default function Header(props) {
  return (
    <div className="app-header">
      <div className="header-row-1">
        <div className="header-title">{props?.page}</div>
        <div className="checkout-btn">
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="header-row-2">Swipable Ads</div>
    </div>
  );
}
