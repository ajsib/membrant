/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const cardStyle = css`
  cursor: pointer;
  width: max-content;
  padding: 0 2vw 2vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 25%;
  margin-top: 2vw;
  background-color: #f0f0f0;
  border-radius: 1vw;
  box-shadow: 0.5vw 0.5vw 1vw 0px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 2vw;
    margin-bottom: 1vw;
  }
  p {
    font-size: 1.5vw;
  }
`;

const Card = ({ children, onClick }) => {
  return (
    <div css={cardStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
