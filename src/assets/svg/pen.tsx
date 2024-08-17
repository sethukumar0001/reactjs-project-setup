import React from "react";
import "./svg.scss";
import { getValue } from "@utils/lodash";

function PenSvgComponent(props: any) {
  return (
    <div className="cursor-pointer">
      <svg
        id="edit_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "18"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "18"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#3c4043"
        }
      >
        <path
          id="Path_46823"
          data-name="Path 46823"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_46824"
          data-name="Path 46824"
          d="M14.06,9.02l.92.92L5.92,19H5v-.92l9.06-9.06M17.66,3a1,1,0,0,0-.7.29L15.13,5.12l3.75,3.75,1.83-1.83a1,1,0,0,0,0-1.41L18.37,3.29A.982.982,0,0,0,17.66,3Zm-3.6,3.19L3,17.25V21H6.75L17.81,9.94,14.06,6.19Z"
        />
      </svg>
    </div>
  );
}

export default PenSvgComponent;
