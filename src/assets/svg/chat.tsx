import { getValue } from "@utils/lodash";
import React from "react";

function ChatSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "18"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "18"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#000000"
        }
      >
        <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
      </svg>
    </div>
  );
}

export default ChatSvgComponent;
