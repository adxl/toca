import React, { useEffect } from "react";

import { sendRequest } from "../api";

import { useTracking } from "./TrackingProvider";

type Props = {
  title: string;
  children: React.ReactElement[] | React.ReactElement;
};

const PageView: React.FC<Props> = ({ title, children }) => {
  const credentials = useTracking();

  const sendEvent = () => {
    const data = { title, url: window.location.href, timestamps: Date.now() };
    sendRequest("/events/page-views", credentials, data);
  };

  useEffect(() => {
    console.debug(`[${title}] page view triggered`);

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState === "visible") {
          sendEvent();
        }
      },
      { once: true }
    );
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default PageView;
