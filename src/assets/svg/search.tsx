import { getValue } from "@utils/lodash";
import React from "react";

function SearchSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="48"
        // width="48"
        viewBox="0 0 512 512"
        className="icon text-link align-text-top"
       
          width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
          height={
            getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
          }
      >
        <path
          d="M495.6 465.9 410.7 381c33.9-40.6 52.4-91.2 52.4-144.7 0-60.4-23.6-117.2-66.3-160-42.8-42.6-99.7-66.1-160.1-66.1-60.5 0-117.3 23.5-160.1 66.2s-66.3 99.5-66.3 160 23.6 117.2 66.3 160c42.8 42.7 99.6 66.2 160.1 66.2 53.3 0 103.8-18.3 144.3-51.9l84.9 84.9c4.1 4.1 9.5 6.2 14.8 6.2s10.7-2 14.8-6.2c8.3-8.2 8.3-21.5.1-29.7zm-389.4-99.3c-34.8-34.8-54-81-54-130.2s19.2-95.4 54-130.2c36-35.9 83.2-53.9 130.4-53.9s94.5 18 130.4 53.9c34.8 34.8 54 81 54 130.2s-19.2 95.4-54 130.2c-71.8 71.9-188.9 71.9-260.8 0z"
        //   fill="lightgray"
        fill={
            getValue(props, `color`, "")
              ? getValue(props, `color`, "")
              : "#f27475"
          }
        ></path>
      </svg>
    </div>
  );
}

export default SearchSvgComponent;
