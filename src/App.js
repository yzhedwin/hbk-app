import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/constants";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/Login" /> */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
