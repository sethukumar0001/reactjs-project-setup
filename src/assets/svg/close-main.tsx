import { getValue } from "@utils/lodash";
import React from "react";

function CloseMainSvgComponent(props: any) {
  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="48"
        viewBox="0 -960 960 960"
        // width="48"
        className=""
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path
          d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
          fill={
            getValue(props, `color`, "") ? getValue(props, `color`, "") : "#f27476"
          }
        />
      </svg>
    </div>
  );
}

export default CloseMainSvgComponent;
