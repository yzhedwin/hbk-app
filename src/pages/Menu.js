import React from "react";
import Category from "../components/Category";
import MediaCard from "../components/MediaCard";
import chewie from "../static/images/chewie.jpg";

export default function Menu() {
  return (
    <React.Fragment>
      <div className="menu-tabs">
        <Category />
      </div>
      <div className="menu-food-container">
        <MediaCard image={chewie} name={"chewie"} />
      </div>
    </React.Fragment>
  );
}
