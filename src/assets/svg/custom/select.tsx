import { getValue } from "@utils/lodash";
import React from "react";

function SelectSvgComponent(props: any) {
  return (
    <div>
      <svg
        // width="30"
        // height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#3C4043"
        }
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#FFF" opacity=".01" d="M0 0h30v30H0z"></path>
          <path
            d="M18 9h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9V9z"
            fill="#000"
            stroke="#000"
          ></path>
          <path fill="#FFF" d="M23.106 17.227L20 13.5h6.212z"></path>
          <path
            d="M3 9h15v12H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
            stroke="#000"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default SelectSvgComponent;
