import { getValue } from "@utils/lodash";
import React from "react";

function SwapVerticalSvgComponent(props: any) {
  return (
    <div className="image_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#1a73e8"
        }
        className="image"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
      </svg>
    </div>
  );
}

export default SwapVerticalSvgComponent;
