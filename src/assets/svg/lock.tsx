import { getValue } from "@utils/lodash";
import React from "react";

function LockSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path
          d="M160-80v-554h130v-96q0-78.85 55.606-134.425Q401.212-920 480.106-920T614.5-864.425Q670-808.85 670-730v96h130v554H160Zm60-60h520v-434H220v434Zm260.168-140Q512-280 534.5-302.031T557-355q0-30-22.668-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350-634h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426-860 388-822.083 350-784.167 350-730v96ZM220-140v-434 434Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#DADCE0"
          }
        />
      </svg>
    </div>
  );
}

export default LockSvgComponent;
