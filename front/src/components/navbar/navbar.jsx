import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        float: "left",
        height: "100%",
        border: "1px solid black",
        width: "100px",
      }}
    >
      <NavItem text={"Projects"} link={"/projects"} />
      <NavItem text={"Account"} link={"/account"} />
    </div>
  );
};

const NavItem = ({ link, image, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={image} />
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default NavBar;
