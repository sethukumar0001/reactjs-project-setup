import React from "react";
import { getValue } from "@utils/lodash";

function CheckboxSvgComponent(props: any) {
  return (
    <div>
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
            : "#3C4043"
        }
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" />
      </svg>
    </div>
  );
}

export default CheckboxSvgComponent;
