import { getValue } from "@utils/lodash"; // Ensure this is correctly imported
import React from "react";

function ReplySvgComponent(props: any) {
  const size = getValue(props, `size`, "") ? getValue(props, `size`, "") : "24";
  const color = getValue(props, `color`, "")
    ? getValue(props, `color`, "")
    : "#efba1f";

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill={color}
        className="chatbot-hover"
      >
        <path d="M3.707,7.99946609 L6.3890873,10.6819805 C6.58434944,10.8772427 6.58434944,11.1938252 6.3890873,11.3890873 C6.21552094,11.5626536 5.94609654,11.5819388 5.7512284,11.4469427 L5.68198052,11.3890873 L2.11603371,7.82029139 L2.11603371,7.82029139 L2.06639375,7.74915207 L2.06639375,7.74915207 L2.03875135,7.69334249 L2.03875135,7.69334249 L2.0159743,7.62570887 L2.0159743,7.62570887 L2.01108568,7.60498705 C2.00382515,7.57130067 2,7.53609704 2,7.5 L2.00546187,7.57391777 L2.00179699,7.5424826 L2.00179699,7.5424826 L2.00179763,7.45747863 L2.00179763,7.45747863 L2.01678848,7.37116919 L2.01678848,7.37116919 L2.03779224,7.30896344 L2.03779224,7.30896344 L2.07718801,7.23298968 L2.07718801,7.23298968 L2.13168953,7.16184291 L2.13168953,7.16184291 L5.68198052,3.6109127 C5.87724266,3.41565056 6.19382515,3.41565056 6.3890873,3.6109127 C6.56265365,3.78447906 6.5819388,4.05390346 6.44694275,4.2487716 L6.3890873,4.31801948 L3.707,6.99946609 L8,7 C11.5217665,7 13.8853902,8.97580254 13.9959473,11.7924218 L14,12 C14,12.2761424 13.7761424,12.5 13.5,12.5 C13.2238576,12.5 13,12.2761424 13,12 C13,9.72683267 11.1925298,8.09541085 8.26151713,8.00404239 L8,8 L3.707,7.99946609 L6.3890873,10.6819805 L3.707,7.99946609 Z" />
      </svg>
    </div>
  );
}

export default ReplySvgComponent;
