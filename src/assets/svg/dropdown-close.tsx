import { getValue } from "@utils/lodash";
import React from "react";

function DropdownCloseSvgComponent(props: any) {
  return (
    <div className="delete_image_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="48"
        viewBox="0 -960 960 960"
        // width="48"
        className="delete_image"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>
    </div>
  );
}

export default DropdownCloseSvgComponent;
