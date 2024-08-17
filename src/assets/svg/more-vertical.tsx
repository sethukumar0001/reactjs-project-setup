import { getValue } from "@utils/lodash";
import React from "react";

function MoreVerticalSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="more_vert_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        viewBox="0 0 24 24"
      >
        <path
          id="Path_11316"
          data-name="Path 11316"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_11317"
          data-name="Path 11317"
          d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z"
          fill="#444f60"
        />
      </svg>
    </div>
  );
}

export default MoreVerticalSvgComponent;
