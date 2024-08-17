import { getValue } from "@utils/lodash";
import React from "react";

function GraphSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        viewBox="0 -960 960 960"
      >
        <path
          d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#1a73e8"
          }
        />
      </svg>
    </div>
  );
}

export default GraphSvgComponent;
