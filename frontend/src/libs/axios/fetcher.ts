import axios from "axios";

type Credentials = {
  client: string;
  uid: string;
  accessToken: string;
};

const fetcher = (credentials?: Credentials) =>
  axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      client: credentials?.client,
      uid: credentials?.uid,
      "access-token": credentials?.accessToken,
    },
  });

export default fetcher;
