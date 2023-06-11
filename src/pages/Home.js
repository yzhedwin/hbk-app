import React, { useCallback, useState } from "react";
import Menu from "./Menu";
import Account from "./Account";
import BottomNav from "../components/AppBar";
import Header from "../components/Header";
import _ from "lodash";
import Feature from "../components/home/Feature";
import HomeScreen from "../components/home/HomeScreen";
import { FEATURE_LIST } from "../utils/constants";

export default function Home() {
  const [page, setPage] = useState("Home");
  const [order, setOrder] = useState([]);
  const [index, setIndex] = useState(0);

  const handlePage = (event) => {
    setPage(event);
  };
  const handleAddItem = (newOrder) => {
    let isDupe = false;
    let currOrders = order.map((o) => {
      if (_.isEqual(o.name, newOrder.name)) {
        isDupe = true;
        console.log(o);
        return {
          ...o,
          price: o.price + newOrder.price,
          quantity: o.quantity + 1,
        };
      }
      return o;
    });
    if (!isDupe) {
      currOrders.push({ ...newOrder, quantity: 1 });
    }
    setOrder(currOrders);
  };
  const pageDict = {
    Menu: <Menu handleAddItem={handleAddItem} />,
    Account: <Account />,
  };

  const renderPage = () => {
    if (page === "Home") {
      return <HomeScreen />;
    }
    return pageDict[page];
  };

  const handleScrollLeft = (index) => {
    let newIndex = index;
    if (index > 0) {
      newIndex--;
    }
    setIndex(newIndex);
  };
  const handleScrollRight = (index) => {
    let newIndex = index;
    if (index < FEATURE_LIST.length - 1) {
      newIndex++;
    }
    setIndex(newIndex);
  };

  return (
    <>
      <Header page={page} order={order} />
      <Feature
        page={page}
        index={index}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
      />
      {renderPage()}
      <BottomNav handlePage={handlePage} />
    </>
  );
}
