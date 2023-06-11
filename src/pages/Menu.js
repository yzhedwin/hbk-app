import React from "react";
import Category from "../components/menu/Category";
import MediaCard from "../components/MediaCard";
import { MENU_DICT } from "../utils/constants";

export default function Menu(props) {
  const { handleAddItem } = props;
  const [menu, setMenu] = React.useState("ice");

  const handleMenuChange = (event, newMenu) => {
    setMenu(newMenu);
    console.log(newMenu)
  };
  const renderMenu = () => {
    return MENU_DICT[menu].map((pic) => {
      return (
        <MediaCard key={pic.name} order={pic} handleAddItem={handleAddItem} />
      );
    });
  };

  return (
    <React.Fragment>
      <div className="menu-tabs">
        <Category handleMenuChange={handleMenuChange} menu={menu} />
      </div>
      <div className="menu-food-container">{renderMenu()}</div>
    </React.Fragment>
  );
}
