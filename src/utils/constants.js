import { brown } from "@mui/material/colors";
import chewie from "../static/images/chewie.jpg";
import chewie2 from "../static/images/chewie2.jpg";
import { createTheme } from "@mui/material/styles";

/* Load from DB */
const MENU_ICE = [{ url: chewie, name: "Pistachio", price: 6 }];
const MENU_PASTRIES = [{ url: chewie, name: "Pain au Chocolat", price: 6 }];
const MENU_COFFEE = [{ url: chewie, name: "Expresso", price: 6 }];
const MENU_OTHERS = [{ url: chewie, name: "chewie", price: 6 }];

export const MENU_DICT = {
  ice: MENU_ICE,
  pastries: MENU_PASTRIES,
  coffee: MENU_COFFEE,
  others: MENU_OTHERS,
};

export const FEATURE_LIST = [chewie, chewie2];

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: brown[500],
      darker: "#053e85",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#fff",
    },
  },
});
