import { getValue } from "@utils/lodash";
import React from "react";

function NotificationSvgComponent(props: any) {
  return (
    <div className="cursor-pointer">
      <svg
        id="circle_notifications_black_24dp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"}
        height={
          getValue(props, `size`, "") ? getValue(props, `size`, "") : "24"
        }
      >
        <g id="Group_9536" data-name="Group 9536">
          <path
            id="Path_44661"
            data-name="Path 44661"
            d="M0,0H24V24H0Z"
            fill="none"
          />
        </g>
        <g id="Group_9537" data-name="Group 9537">
          <path
            id="Path_44662"
            data-name="Path 44662"
            d="M12,18.5A1.5,1.5,0,0,0,13.5,17h-3A1.5,1.5,0,0,0,12,18.5ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Zm4-8.61C16,9.28,14.97,7.47,13,7V6.5a1,1,0,0,0-2,0V7c-1.97.47-3,2.27-3,4.39V14H7v2H17V14H16ZM14,14H10V11a2,2,0,0,1,4,0Z"
            fill={
              getValue(props, `color`, "")
                ? getValue(props, `color`, "")
                : "#707070"
            }
          />
        </g>
      </svg>
    </div>
  );
}

export default NotificationSvgComponent;
