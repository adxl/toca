const API_URL = "http://localhost:9000";

export type Credentials = {
  appId: string;
  appSecret: string;
};

export const sendRequest = (path: string, credentials: Credentials, data: Record<string, unknown>): void => {
  const body = JSON.stringify({ credentials, data });
  console.log(body);
  void fetch(API_URL + path, { method: "POST", body });
};

export const sendRequestAsync = (path: string, credentials: Credentials, data: Record<string, unknown>): void => {
  const body = JSON.stringify({ credentials, data });
  navigator.sendBeacon(API_URL + path, body);
};
