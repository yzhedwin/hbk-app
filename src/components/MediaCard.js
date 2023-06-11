import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function MediaCard(props) {
  const { order } = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardMedia sx={{ height: 100 }} image={order?.url} title={order?.name} />
      <CardContent className="menu-card-content">
        <div>{order?.name}</div>
        <div>Price:{order?.price}</div>
      </CardContent>
      <CardActions className="menu-card-action">
        <Button
          size="small"
          onClick={() => {
            handleClick();
            props?.handleAddItem(order);
          }}
        >
          Add
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="Added to cart"
          action={action}
        />
      </CardActions>
    </Card>
  );
}
