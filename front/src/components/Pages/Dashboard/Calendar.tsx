/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const calendarStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

const calendarWeekdaysStyle = css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
`;

const calendarGrid = css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
`;

const calendarDayStyle = css`
    border: 1px solid #ddd;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const emptyDayStyle = css`
    background-color: #f0f0f0;
`;


const Calendar: React.FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array for the blanks and days of the month
  const calendarDays = [];
  
  // Fill in the blanks for days before the start of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`blank-${i}`} css={emptyDayStyle}></div>);
  }

  // Fill in the actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(<div key={day} css={calendarDayStyle}>{day}</div>);
  }

  return (
    <div css={calendarStyle}>
      <h4>{currentMonth + 1}/{currentYear}</h4>
      <div css={calendarWeekdaysStyle}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div css={calendarGrid}>
        {calendarDays}
      </div>
    </div>
  );
};

export default Calendar;
