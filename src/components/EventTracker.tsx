import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const EventTracker: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    console.debug("Mounted the EventTracker component");
  }, []);

  return (
    <React.Fragment>
      <div style={{ border: "dashed 3px green", padding: "0 10px 10px 10px" }}>
        <p>
          This border proves that the component has been successfully wrapped by Toca component 😁
        </p>
        {children}
      </div>
    </React.Fragment>
  );
};

export default EventTracker;
