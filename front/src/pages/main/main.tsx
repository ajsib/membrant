/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const homeStyle = css`
  height: 2000px;
`;

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 100px;
`;

const titleStyle = css`
  text-align: center;
  h1 {
    font-size: 5rem;
    margin-bottom: 20px;
    text-shadow: 0px 4px 10px #6c757d;
  }
  h2 {
    font-size: 2rem;
    color: #6c757d;
  }
`;

const buttonStyle = css`
  margin-left: 10%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const getStartedButton = css`
  margin: 20px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  border-radius: 150px;
  background-color: #038cfc;
  color: white;
  border: none;
  transition: 0.3s ease;
  p {
    transition: 0.3s ease-in-out;
  }
  svg {
    transition: 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: #0d6efd;
    transform: scale(1.1);
    svg {
      transform: translateX(120%);
    }
  }
`;

const loginButton = css`
  border: none;
  font-size: 1rem;
  background-color: transparent;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #0d6efd;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div css={homeStyle}>
      <div css={headerStyle}>
        <div css={titleStyle}>
          <h1>Membrant</h1>
          <h2>
            &quot;For every minute spent organizing, <br /> an hour is
            earned&quot; - Benjamin Franklin
          </h2>
        </div>
        <div css={buttonStyle}>
          <button css={getStartedButton} onClick={() => navigate("/signup")}>
            <p>Get Started</p> <FiArrowRight />
          </button>
          <button css={loginButton} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
