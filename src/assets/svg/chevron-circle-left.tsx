import { getValue } from "@utils/lodash";

function ChevronCircleLeft(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 320 512"
        viewBox="0 0 512 512"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
        fill={
          getValue(props, `color`, "")
            ? getValue(props, `color`, "")
            : "#707070"
        }
        className="sidebar-footer-icon"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
        </g>
      </svg>
    </div>
  );
}

export default ChevronCircleLeft;
