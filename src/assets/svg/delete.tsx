import { getValue } from "@utils/lodash";
import React from "react";

function DeleteSvgComponent(props: any) {
  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "18"}
        height={getValue(props, `size`, "") ? getValue(props, `size`, "") : "18"}
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#3c4043"
        }
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </svg>
    </div>
  );
}

export default DeleteSvgComponent;
