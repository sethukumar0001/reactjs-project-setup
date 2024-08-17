import React from "react";
import { getValue } from "@utils/lodash";

function ArrowDownSvgComponent(props: any) {
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
            : "#DA4F4F"
        }
      >
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
    </div>
  );
}

export default ArrowDownSvgComponent;
