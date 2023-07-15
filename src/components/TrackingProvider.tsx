import React, { createContext, useContext } from "react";

import type { Credentials } from "../api";

const defaultTrackingContext = { appId: "", appSecret: "" };
const TrackingContext = createContext<Credentials>(defaultTrackingContext);

export const useTracking = (): Credentials => useContext(TrackingContext);

type Props = {
  appId: string;
  appSecret: string;
  children: React.ReactNode;
};

const TrackingProvider: React.FC<Props> = ({ appId, appSecret, children }) => (
  <TrackingContext.Provider value={{ appId, appSecret }}>{children}</TrackingContext.Provider>
);

export default TrackingProvider;
