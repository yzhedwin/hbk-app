import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";


export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardMedia sx={{ height: 100 }} image={props?.image} title={props.name}/>
      <CardContent>
        <div>{props.name}</div>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
