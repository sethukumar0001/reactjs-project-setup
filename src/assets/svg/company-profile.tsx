import { getValue } from "@utils/lodash";
import React from "react";

function CompanyProfileSvgComponent(props: any) {
  return (
    <div>
      <svg
        id="corporate_fare_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <rect
          id="Rectangle_17380"
          data-name="Rectangle 17380"
          width="24"
          height="24"
          fill="none"
        />
        <path
          id="Path_46723"
          data-name="Path 46723"
          d="M12,7V3H2V21H22V7ZM10,19H4V17h6Zm0-4H4V13h6Zm0-4H4V9h6Zm0-4H4V5h6ZM20,19H12V9h8Zm-2-8H14v2h4Zm0,4H14v2h4Z"
          fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#2C3E50"
          }
        />
      </svg>
    </div>
  );
}

export default CompanyProfileSvgComponent;
