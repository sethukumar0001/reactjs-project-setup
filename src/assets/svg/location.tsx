import { getValue } from "@utils/lodash";

function PinDropSvgComponent(props: any) {
  const size = getValue(props, `size`, "") ? getValue(props, `size`, "") : "24";
  const color = getValue(props, `color`, "")
    ? getValue(props, `color`, "")
    : "#3C4043";

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        width={size}
        height={size}
        fill={color}
        className="chatbot-hover"
      >
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
      </svg>
    </div>
  );
}

export default PinDropSvgComponent;
