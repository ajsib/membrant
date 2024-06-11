/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; // Import SerializedStyles for typing CSS prop
import { useNavigate } from 'react-router-dom';
import ProjectIcon from '../../../assets/SVG/ProjectsIcon';
import DashboardIcon from '../../../assets/SVG/DashboardIcon';
import CalendarIcon from '../../../assets/SVG/CalendarIcon';
import ProfileIcon from '../../../assets/SVG/ProfileIcon';

interface NavItemProps {
  link: string;
  icon: JSX.Element; // Changed to accept JSX.Element for SVG icons
  text?: string;
}

const navStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out; // Include box-shadow in transition

  &:hover {
    width: 12rem; // Width increases on hover
    box-shadow: 0.5vw 0.5vw 1vw 0px rgba(0, 0, 0, 0.2); // Smooth transition for box-shadow
    p {
      opacity: 1;
    }
  }
`;

const navItemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 1rem);
  padding: 0.5rem;
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  p {
    font-size: 1.5rem;
    opacity: 0; // Initially hide the text
    text-decoration: none;
    color: #6c757d;
    margin-top: 0.5rem;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    background-color: #e9ecef;
    cursor: pointer;
    p {
      color: #0d6efd;
    }
  }

  /* Apply margin-top auto to the last child */
  &:last-child {
    margin-top: auto;
  }
`;

const NavBar = () => {
  return (
    <div css={navStyle}>
      <NavItem text={"Home"} icon={<DashboardIcon size={50} secondaryColor='#00bfff' />} link={"/dashboard"} />
      <NavItem text={"Projects"} icon={<ProjectIcon size={50} />} link={"/projects"} />
      <NavItem text={"Calendar"} icon={<CalendarIcon size={50} />} link={"/calendar"} />
      <NavItem icon={<ProfileIcon size={50} />} link={"/profile"} />
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ link, icon, text }) => {
  const navigate = useNavigate();
  return (
    <div css={navItemStyle} onClick={() => navigate(link)}>
      {icon} 
      <p>{text}</p>
    </div>
  );
};

export default NavBar;
