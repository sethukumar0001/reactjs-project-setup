import { getValue } from "@utils/lodash";
import React from "react";

function TextAreaSvgComponent(props: any) {
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
            fill="#000"
            d="M12.361 6.707H8.854v12.306l2.142.525V20H4.759v-.462l2.142-.525V6.707H3.394L2.386 9.563H1.84V5.93h12.075v3.633h-.546z"
          ></path>
          <path
            d="M17.096 6H28v20H8v-3.508"
            stroke="#000"
            stroke-dasharray="2,1"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default TextAreaSvgComponent;
