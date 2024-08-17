import { getValue } from "@utils/lodash";
import React from "react";

function ChecklistSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : '#3C4043'
        }
      >
        <rect fill="none" height="24" width="24" />
        <path d="M11,7H2v2h9V7z M11,15H2v2h9V15z M16.34,11l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,5.34L16.34,11z M16.34,19 l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,13.34L16.34,19z" />
      </svg>
    </div>
  );
}

export default ChecklistSvgComponent;
