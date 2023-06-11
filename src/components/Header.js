import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import CartPopOver from "./cart/CartPopOver";

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="app-header">
      <div className="header-row-1">
        <div className="header-title">{props?.page}</div>
        <div className="checkout-btn">
          <CartPopOver
            id={id}
            handleClose={handleClose}
            anchorEl={anchorEl}
            open={open}
            order={props?.order}
          />
         
            <IconButton onClick={handleClick} color="neutral">
              <ShoppingCartOutlinedIcon />
            </IconButton>
        </div>
      </div>
    </div>
  );
}
