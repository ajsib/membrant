import React from 'react';

interface Props {
  color?: string;
  size?: number;
}

const ProjectIcon: React.FC<Props> = ({ color = "#000000", size = 20 }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path d="M2,9H9V2H2Zm9-7V9h7V2ZM2,18H9V11H2Zm9,0h7V11H11Z" />
      </g>
    </svg>
  );
};

export default ProjectIcon;
