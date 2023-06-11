import Image from "mui-image";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { IconButton } from "@mui/material";
import { FEATURE_LIST } from "../../utils/constants";
/* Feature item */
export default function Feature(props) {
  const { page, handleScrollLeft, handleScrollRight, index } = props;

  return page === "Home" ? (
    <div className="home-header-row-2">
      <Image src={FEATURE_LIST[index]} height={180} width={200}/>
      <IconButton
        className="home-feature-scroll-right"
        onClick={() => handleScrollRight(index)}
      >
        <ArrowRightIcon />
      </IconButton>
      <IconButton
        className="home-feature-scroll-left"
        onClick={() => handleScrollLeft(index)}
      >
        <ArrowLeftIcon />
      </IconButton>
    </div>
  ) : null;
}
