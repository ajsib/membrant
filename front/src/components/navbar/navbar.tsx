/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface NavItemProps {
  link: string;
  image?: string; // Optional image prop
  text: string;
}

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

const NavItem: React.FC<NavItemProps> = ({ link, image, text }) => {
  return (
    <div css={navItemStyle}>
      {image && <img src={image} alt={text} />} {/* Optional image rendering */}
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default NavBar;
