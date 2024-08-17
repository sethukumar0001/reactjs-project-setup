import { getValue } from "@utils/lodash";
import React from "react";

function BackSvgComponent(props: any) {
  return (
    <div className="image_container">
      <svg
        id="arrow_back-24px"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        className="image"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path
          id="Path_9129"
          data-name="Path 9129"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_9130"
          data-name="Path 9130"
          d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
          fill={getValue(props, `color`, "") && getValue(props, `color`, "")}
        />
      </svg>
    </div>
  );
}

export default BackSvgComponent;
