import { getValue } from "@utils/lodash";
import React from "react";

function ModulesAndFieldsSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="segment_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <g id="Group_10178" data-name="Group 10178">
          <rect
            id="Rectangle_17382"
            data-name="Rectangle 17382"
            width="24"
            height="24"
            fill="none"
          />
        </g>
        <g id="Group_10179" data-name="Group 10179">
          <path
            id="Path_46732"
            data-name="Path 46732"
            d="M9,18H21V16H9ZM3,6V8H21V6Zm6,7H21V11H9Z"
            fill={
              getValue(props, `color`, "")
                ? getValue(props, `color`, "")
                : "#707070"
            }
          />
        </g>
      </svg>
    </div>
  );
}

export default ModulesAndFieldsSvgComponent;
