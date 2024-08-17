import React, { useEffect, useState } from "react";
import { getValue } from "@utils/lodash";

function AddSvgComponent(props: any) {
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--theme-icon-color")
    .trim();
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="48"
        viewBox="0 -960 960 960"
        // width="48"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path
          d="M433-183v-250H183v-94h250v-250h94v250h250v94H527v250h-94Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : primaryColor
          }
        />
      </svg>
    </div>
  );
}

export default AddSvgComponent;
