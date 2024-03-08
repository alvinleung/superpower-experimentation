import React from "react";

type Props = {};

const ArrowCTA = (props: Props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#18181B" />
      <path
        d="M15.3327 20L24.666 20"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.9993 15.3346L24.666 20.0013L19.9993 24.668"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowCTA;
