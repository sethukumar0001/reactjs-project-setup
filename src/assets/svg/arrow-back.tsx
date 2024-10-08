import { getValue } from "@utils/lodash";
import React from "react";

function ArrowBackSvgComponent(props: any) {
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
        <path d="m113-480 315 315q11 11 11 27.5T428-109q-12 12-28.5 12T371-109L42-438q-9-9-13-20t-4-22q0-11 4-22t13-20l330-330q12-12 28-11.5t28 12.5q11 12 11.5 28T428-795L113-480Z" />
      </svg>
    </div>
  );
}

export default ArrowBackSvgComponent;
