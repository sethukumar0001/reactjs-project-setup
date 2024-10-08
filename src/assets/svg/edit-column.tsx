import { getValue } from "@utils/lodash";
import React from "react";

function EditColumnSvgComponent(props: any) {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        // class="NSy2Hd cdByRd RTiFqe undefined"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#707070"
        }
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"></path>
      </svg>
    </div>
  );
}

export default EditColumnSvgComponent;
