import React, { useEffect } from "react";
import NavBar from "../../components/navbar/navbar";

const Dash = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div>
      <NavBar />
      <div
        style={{
          marginLeft: "110px",
        }}
      >
        <h1>Dashboard</h1>
        <h2>Welcome {localStorage.getItem("name")}!</h2>
      </div>
      <div
        style={{
          marginLeft: "110px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            float: "left",
            border: "1px solid black",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <div>
            <h3>Projects</h3>
            <div>
              <h4>Project 1</h4>
              <h4>Project 2</h4>
              <h4>Project 3</h4>
            </div>
          </div>
          <div>
            <h3>Upcoming Deadlines</h3>
            <div>
              <h4>Deadline 1</h4>
              <h4>Deadline 2</h4>
            </div>
          </div>
          <div>
            <h3>Activity</h3>
            <div>
              <h4>Task 1</h4>
              <h4>Task 2</h4>
              <h4>Task 3</h4>
            </div>
          </div>
        </div>
        <div>
          <h3>Calendar</h3>
          <div
            style={{
              border: "1px solid black",
              width: "100%",
              height: "500px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
