/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const navStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
`;

const navItemStyle = css`
  margin: 10px;
`;

const NavBar = () => {
  return (
    <div css={navStyle}>
      <NavItem text={"Projects"} link={"/projects"} />
      <NavItem text={"Account"} link={"/account"} />
    </div>
  );
};

const NavItem = ({ link, image, text }) => {
  return (
    <div css={navItemStyle}>
      <img src={image} />
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default NavBar;
