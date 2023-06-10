import React, { useState } from "react";
import Menu from "./Menu";
import Account from "./Account";
import BottomNav from "../components/AppBar";
import Header from "../components/Header";

export default function Home() {
  const [page, setPage] = useState();

  const handlePage = (event) => {
    setPage(event);
  };
  const pageDict = {
    Menu: <Menu />,
    Account: <Account />,
  };
  const renderPage = () => {
    if (page === "Home") {
      return <div>About us</div>;
    }
    return pageDict[page];
  };

  return (
    <>
      <Header page={page} />
      {renderPage()}
      <BottomNav handlePage={handlePage} />
    </>
  );
}
