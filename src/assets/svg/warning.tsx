import { getValue } from "@utils/lodash";
import React from "react";

function WarningSvgComponent(props: any) {
  return (
    <div>
      <svg
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-lg"
      >
        <path
          opacity="0.01"
          fill="#fff"
          fill-opacity="0.2"
          d="M0 0h18v18H0z"
        ></path>
        <path
          clip-rule="evenodd"
          d="M7.252 2.23c.77-1.33 2.69-1.33 3.461 0l6.462 11.157c.772 1.333-.19 3.002-1.73 3.002H2.52c-1.54 0-2.502-1.67-1.73-3.002L7.252 2.229Z"
          stroke="#E16023"
        ></path>
        <path
          d="M9 5.796v4.496M9 12.957v-.318"
          stroke="#E16023"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  );
}

export default WarningSvgComponent;
