import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import styled from "styled-components";

const Nigga = styled.div`
  flex-direction: column
  justify-content: center
  align-items: center
  display: flex
  margin: 10px
  padding: 10px
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="header__text">
          <h1>Membrant</h1>
          <h2 
            style={{
              // centered
              textAlign: "center",
            }}>
            &quot;For every minute spent organizing, <br /> an hour is earned&quot; - Benjamin Franklin
          </h2>
        </div>
        <div className="header__buttons">
          <button className="signup-button" onClick={() => navigate("/signup")}>
            <p>Get Started</p> <img src={Arrow} />
          </button>
          <button className="login-button" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
