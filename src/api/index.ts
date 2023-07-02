const API_URL = "http://localhost:5002";

export type Credentials = {
  appId: string;
  appSecret: string;
};

// export const sendRequest = (path: string, credentials: Credentials, data: Record<string, unknown>): void => {
//   const body = JSON.stringify({ credentials, data });
//   void fetch(API_URL + path, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body,
//   });
// };

export const sendRequest = (path: string, credentials: Credentials, data: Record<string, unknown>): void => {
  // const body = JSON.stringify({ credentials, data });

  data.timestamp = new Date();
  const body = new Blob([JSON.stringify({ credentials, data })], {
    type: "application/json",
  });
  navigator.sendBeacon(API_URL + path, body);
};
