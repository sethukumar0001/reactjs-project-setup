import React from "react";
import { getValue } from "@utils/lodash";

function ArrowUpSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#23AE73"
          }
      >
        <path d="m280-400 200-200 200 200H280Z" />
      </svg>
    </div>
  );
}

export default ArrowUpSvgComponent;
