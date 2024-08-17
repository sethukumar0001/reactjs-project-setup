import { getValue } from "@utils/lodash";
import React from "react";

function SquareSvgComponent(props: any) {
  const size = getValue(props, "size", "") ? getValue(props, "size", "") : "24";
  const color = getValue(props, "color", "")
    ? getValue(props, "color", "")
    : "#efba1f";

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width={size}
        height={size}
        fill={color}
        className="chatbot-hover"
      >
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
      </svg>
    </div>
  );
}

export default SquareSvgComponent;
