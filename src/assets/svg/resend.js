import { getValue } from "@utils/lodash";
import React from "react";

function ResendSvgComponent(props) {
  return (
    <div className="edit_image_container">
      <svg
        id="send_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="edit_image"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path
          id="Path_44586"
          data-name="Path 44586"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_44587"
          data-name="Path 44587"
          d="M4.01,6.03l7.51,3.22L4,8.25l.01-2.22m7.5,8.72L4,17.97V15.75l7.51-1M2.01,3,2,10l15,2L2,14l.01,7L23,12Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#f27475"
          }
        />
      </svg>
    </div>
  );
}

export default ResendSvgComponent;
