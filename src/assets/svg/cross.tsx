import { getValue } from "@utils/lodash";
import React from "react";

function CrossSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="close_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        viewBox="0 0 24 24"
      >
        <path
          id="Path_46258"
          data-name="Path 46258"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_46259"
          data-name="Path 46259"
          d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#707070"
          }
        />
      </svg>
    </div>
  );
}

export default CrossSvgComponent;
