import { getValue } from "@utils/lodash";
import React from "react";

function PersonSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="person_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        viewBox="0 0 24 24"
      >
        <path
          id="Path_46741"
          data-name="Path 46741"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_46742"
          data-name="Path 46742"
          d="M12,6a2,2,0,1,1-2,2,2.006,2.006,0,0,1,2-2m0,10c2.7,0,5.8,1.29,6,2H6c.23-.72,3.31-2,6-2M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,10c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#1a73e8"
          }
          className="chatbot-hover"
        />
      </svg>
    </div>
  );
}

export default PersonSvgComponent;
