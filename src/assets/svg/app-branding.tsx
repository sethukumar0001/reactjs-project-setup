import { getValue } from "@utils/lodash";
import React from "react";

function AppBrandingSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="app_shortcut_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <g id="Group_10175" data-name="Group 10175">
          <rect
            id="Rectangle_17381"
            data-name="Rectangle 17381"
            width="24"
            height="24"
            fill="none"
          />
        </g>
        <g id="Group_10177" data-name="Group 10177">
          <g id="Group_10176" data-name="Group 10176">
            <path
              id="Path_46728"
              data-name="Path 46728"
              d="M17,18H7V6H17V7h2V3a2.006,2.006,0,0,0-2-2H7A2.006,2.006,0,0,0,5,3V21a2.006,2.006,0,0,0,2,2H17a2.006,2.006,0,0,0,2-2V17H17ZM7,3H17V4H7ZM17,21H7V20H17Z"
              fill={
                getValue(props, `color`, "")
                  ? getValue(props, `color`, "")
                  : "#707070"
              }
            />
            <path
              id="Path_46729"
              data-name="Path 46729"
              d="M20.38,9.62,21,11l.62-1.38L23,9l-1.38-.62L21,7l-.62,1.38L19,9Z"
              fill={
                getValue(props, `color`, "")
                  ? getValue(props, `color`, "")
                  : "#707070"
              }
            />
            <path
              id="Path_46730"
              data-name="Path 46730"
              d="M16,8l-1.25,2.75L12,12l2.75,1.25L16,16l1.25-2.75L20,12l-2.75-1.25Z"
              fill={
                getValue(props, `color`, "")
                  ? getValue(props, `color`, "")
                  : "#707070"
              }
            />
            <path
              id="Path_46731"
              data-name="Path 46731"
              d="M21,13l-.62,1.38L19,15l1.38.62L21,17l.62-1.38L23,15l-1.38-.62Z"
              fill={
                getValue(props, `color`, "")
                  ? getValue(props, `color`, "")
                  : "#707070"
              }
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default AppBrandingSvgComponent;
