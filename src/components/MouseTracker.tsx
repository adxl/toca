import React, { useRef } from "react";
import { throttle } from "lodash";

import { sendRequest } from "../api";

import { useTracking } from "./TrackingProvider";

type Props = {
  children: React.ReactElement;
};

const MouseTracker: React.FC<Props> = ({ children }) => {
  const credentials = useTracking();
  const mouseAreaRef = useRef<HTMLDivElement>(null);

  const sendEvent = (x: number, y: number) => {
    console.debug(`mouse position traced on [${x},${y}]`);
    const data = { x, y, url: location.href };
    sendRequest("/events/mouse-movements", credentials, data);
  };

  const handleMouseMove = throttle((e: React.MouseEvent) => {
    if (mouseAreaRef.current) {
      const { clientX, clientY } = e;
      const { top, left } = mouseAreaRef.current.getBoundingClientRect();

      sendEvent(clientX - left, clientY - top);
    }
  }, 500);

  return (
    <div ref={mouseAreaRef} onMouseMove={handleMouseMove} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
};

export default MouseTracker;
