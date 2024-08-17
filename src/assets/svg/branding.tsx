import { getValue } from "@utils/lodash";
import React from "react";

function BrandingSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="business_black_24dp-9"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path
          id="Path_46726"
          data-name="Path 46726"
          d="M0,0H24V24H0Z"
          fill="none"
        />
        <path
          id="Path_46727"
          data-name="Path 46727"
          d="M12,7V3H2V21H22V7ZM6,19H4V17H6Zm0-4H4V13H6Zm0-4H4V9H6ZM6,7H4V5H6Zm4,12H8V17h2Zm0-4H8V13h2Zm0-4H8V9h2Zm0-4H8V5h2ZM20,19H12V17h2V15H12V13h2V11H12V9h8Zm-2-8H16v2h2Zm0,4H16v2h2Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#707070"
          }
          className="chatbot-hover"
        />
      </svg>
    </div>
  );
}

export default BrandingSvgComponent;
