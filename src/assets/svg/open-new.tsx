import React from "react";
import "./svg.scss";
import { getValue } from "@utils/lodash";
function OpenNewSvgComponent(props: any) {
  return (
    <div className="d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="48"
        viewBox="0 -960 960 960"
        // width="48"
        className="common_image_blue"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z" />
      </svg>
    </div>
  );
}

export default OpenNewSvgComponent;
