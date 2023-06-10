import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function BottomNav(props) {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="app-bar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props?.handlePage(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Menu"
          value="Menu"
          icon={<RestaurantMenuIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="Account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
