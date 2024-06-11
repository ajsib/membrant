/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import NavBar from "../../components/Shared/navbar/navbar";
import Card from "../../UI/Card";
import Calendar from "../../components/Pages/Dashboard/Calendar";

const dashboard = css`
  width: calc(100% - var(--left-margin) - var(--right-margin));
  margin-left: var(--left-margin);
  margin-right: var(--right-margin);
`;

const headerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const dashItemContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 5%;
`;

const calendarStyle = css`
  font-size: 1.5rem;
  width: 100%; /* Ensure calendar also attempts to fill available space */
  margin-top: 2rem;
  h3 {
    font-size: 2rem;
  }
`;

const Dash = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div css={dashboard}>
      <NavBar />
      <div css={headerStyle}>
        <h1>Welcome {localStorage.getItem("name")}!</h1>
        <p>Notifs</p>
      </div>
      <div>
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
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dash;
