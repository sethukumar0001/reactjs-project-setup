import { getValue } from "@utils/lodash";
import React from "react";

function ArrowRightSvgComponent(props: any) {
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
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10 17l5-5-5-5v10z" />
      </svg>
    </div>
  );
}

export default ArrowRightSvgComponent;
