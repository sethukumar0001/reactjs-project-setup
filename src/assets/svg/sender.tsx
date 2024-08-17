import React from "react";

function SenderSvgComponent(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="121"
        height="120"
        fill="none"
      >
        <path
          fill="#FFE999"
          d="M12.5 40.001h95.9996l.00711175 54h-95.9996z"
        ></path>
        <path
          d="M60.4997 64 16.4953 28h87.9997L60.4997 64Z"
          fill="#FFC700"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.165 40.001 60.5001 64l29.3292-23.999H31.165Z"
          fill="#FFB100"
        ></path>
      </svg>
    </div>
  );
}

export default SenderSvgComponent;
