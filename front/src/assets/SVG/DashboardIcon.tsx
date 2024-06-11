import React from 'react';

interface Props {
  primaryColor?: string;
  secondaryColor?: string;
  size?: number;
}

const DashboardIcon: React.FC<Props> = ({ primaryColor = "#000000", secondaryColor = "#ffffff", size = 30 }) => {
  return (
    <svg
      fill={primaryColor}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,3A10,10,0,0,0,2,13a9.89,9.89,0,0,0,3.74,7.78,1,1,0,0,0,.62.22H17.64a1,1,0,0,0,.62-.22A9.89,9.89,0,0,0,22,13,10,10,0,0,0,12,3Z"
        fill={primaryColor}
      />
      <path
        d="M16.55,8.17a1,1,0,0,0-1.38.28l-3.39,5.07a1.51,1.51,0,1,0,1.67,1.11l3.38-5.08A1,1,0,0,0,16.55,8.17Z"
        fill={secondaryColor}
      />
    </svg>
  );
};

export default DashboardIcon;
