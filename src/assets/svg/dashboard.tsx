import { getValue } from "@utils/lodash";
import React from "react";

function DashboardSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#4cc793"
        }
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 3h8v8H3zm0 10h8v8H3zm10 0h8v8h-8zm0-10h8v8h-8z" />
      </svg>
    </div>
  );
}

export default DashboardSvgComponent;
