import { getValue } from "@utils/lodash";

function ChevronDown(props: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 512 512"
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
        className="navbar_icon__hover"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </g>
      </svg>
    </div>
  );
}

export default ChevronDown;
