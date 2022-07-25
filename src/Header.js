import React, { useState, useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
  return (
    <div className="header">
      <div className="header_center">
        <input type="text" onChange={props.mainFunc} />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
