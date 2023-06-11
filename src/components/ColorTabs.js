import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IcecreamIcon from '@mui/icons-material/Icecream';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function ColorTabs(props) {
  const {handleMenuChange, menu} = props

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={menu}
        onChange={handleMenuChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab icon={<IcecreamIcon/>} value="ice" label="Ice Cream" sx={{fontSize: "12px"}}/>
        <Tab icon={<BakeryDiningIcon/>} value="pastries" label="Pastries" sx={{fontSize: "12px"}} />
        <Tab icon={<CoffeeIcon/>} value="coffee" label="Coffee" sx={{fontSize: "12px"}}/>
        <Tab value="others" label="Others" sx={{fontSize: "12px"}}/>
      </Tabs>
    </Box>
  );
}