/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerStyle = css`
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: min-content;
  padding: 20px;
  border-top: 5px solid #007bff;
  box-shadow: 10px 10px 20px 0px #000000;
  h2 {
    margin: 10px;
    font-size: 2rem;
  }
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  input {
    width: 300px;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ced4da;
    transition: 0.3s ease;
    font-size: 1.2rem;
    &:focus {
      outline: none;
      border: 1px solid #007bff;
      transform: scale(1.01);
    }
  }
  label {
    margin: 10px;
    font-size: 1.5rem;
    text-align: center;
  }
  button {
    width: 300px;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    transition: 0.3s ease;
    &:hover {
      cursor: pointer;
      background-color: #0056b3;
    }
  }
`;
