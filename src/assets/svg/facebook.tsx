import { getValue } from "@utils/lodash";
import React from "react";

function FacebookSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        // fill={
        //   getValue(props, `color`, "")
        //     ? getValue(props, `color`, "")
        //     : "#3C4043"
        // }
      >
        {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
        <path
          d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#3c4043"
          }
        />
      </svg>
    </div>
  );
}

export default FacebookSvgComponent;
