import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function MediaCard(props) {
  const {order} = props
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={order?.url}
        title={order?.name}
      />
      <CardContent className="menu-card-content">
        <div>{order?.name}</div>
        <div>Price:{order?.price}</div>
      </CardContent>
      <CardActions className="menu-card-action">
        <Button
          size="small"
          onClick={() => props?.handleAddItem(order)}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
