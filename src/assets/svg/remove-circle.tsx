import { getValue } from "@utils/lodash";
import React from "react";

function RemoveCircleSvgComponent(props: any) {
  return (
    <div className="cursor-pointer touchable-text">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="24px"
        viewBox="0 0 24 24"
        // width="24px"
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#f27475"
        }
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
      </svg>
    </div>
  );
}

export default RemoveCircleSvgComponent;
