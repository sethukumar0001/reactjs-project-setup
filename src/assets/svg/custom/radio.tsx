import { getValue } from "@utils/lodash";
import React from "react";

function RadioSvgComponent(props: any) {
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
          <g transform="translate(3 5)">
            <path
              d="M12 4h12.5M12 17h12.5"
              stroke="#000"
              stroke-linecap="round"
            ></path>
            <circle stroke="#000" cx="4" cy="4" r="4"></circle>
            <circle fill="#000" cx="4" cy="4" r="2"></circle>
            <circle stroke="#000" cx="4" cy="17" r="4"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default RadioSvgComponent;
