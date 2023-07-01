import React from "react";

// import { sendRequest } from "../api";
import { useTracking } from "./TrackingProvider";

const events = {
  click: "onClick",
  hover: "onMouseEnter",
  submit: "onSubmit",
  change: "onChange",
  focus: "onFocus",
  blur: "onBlur",
};

type Event = keyof typeof events;

type Props = {
  name: string;
  event: Event;
  children: React.ReactElement;
};

const EventTracker: React.FC<Props> = ({ name, event, children }) => {
  const credentials = useTracking();

  const sendEvent = () => {
    console.debug(`[${event}] event triggered on [${name}] element`);
    const data = { name, eventType: event };
    console.log(credentials, data);
    // sendRequest("/events/tracking", credentials, data);
  };

  const eventFunctionName = events[event];
  const childEventFunction = children.props[eventFunctionName];

  const newChildren = React.cloneElement(children, {
    [eventFunctionName]: (e: any) => {
      sendEvent();
      childEventFunction && childEventFunction(e);
    },
  });

  return <React.Fragment>{newChildren}</React.Fragment>;
};

export default EventTracker;
