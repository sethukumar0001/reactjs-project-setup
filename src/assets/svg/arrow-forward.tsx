import { getValue } from "@utils/lodash";
import React from "react";

function ArrowForwardSvgComponent(props: any) {
  return (
    <div className="image_container_noeffects">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="48"
        viewBox="0 -960 960 960"
        // width="48"
        className="image"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
       
      >
        <path d="M591-482 276-797q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l329 329q9 9 13 20t4 22q0 11-4 22t-13 20L332-110q-12 12-28 11.5T276-111q-11-12-11.5-28t11.5-28l315-315Z"  fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#4cc793"
        }/>
      </svg>
    </div>
  );
}

export default ArrowForwardSvgComponent;
