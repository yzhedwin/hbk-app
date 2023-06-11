import * as React from "react";
import Popover from "@mui/material/Popover";
import CartDetails from "./CartDetails";

export default function CartPopOver(props) {
  const { id, handleClose, anchorEl, open, order } = props;

  return (
    <>
      <Popover
        className="cart-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <CartDetails order={order} />
      </Popover>
    </>
  );
}
