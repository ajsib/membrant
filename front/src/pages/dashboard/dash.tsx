/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Card from "../../UI/Card";

const dashboard = css`
  width: 80%;
  height: 100%;
  margin-left: 110px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const dashItemContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const calendarStyle = css`
  font-size: 1.5vw;
  width: 80%;
  margin-top: 5vw;
  h3 {
    font-size: 2vw;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 5vw;
  }
`;

const Dash = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div css={dashboard}>
      <NavBar />
      <div>
        <h1>Welcome {localStorage.getItem("name")}!</h1>
      </div>
      <div
        css={{
          marginLeft: "110px",
          "@media (max-width: 768px)": {
            marginLeft: "0",
          },
        }}
      >
        <div css={dashItemContainer}>
          <Card>
            <h3>Projects</h3>
            <div>
              <h4>Project 1</h4>
              <h4>Project 2</h4>
              <h4>Project 3</h4>
            </div>
          </Card>
          <Card>
            <h3>Upcoming Deadlines</h3>
            <div>
              <h4>Deadline 1</h4>
              <h4>Deadline 2</h4>
              <h4>Deadline 3</h4>
            </div>
          </Card>
          <Card>
            <h3>Activity</h3>
            <div>
              <h4>Task 1</h4>
              <h4>Task 2</h4>
              <h4>Task 3</h4>
            </div>
          </Card>
        </div>
        <div css={calendarStyle}>
          <h3>Calendar</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
