import fetcher from "@/libs/axios/fetcher";
import { AxiosError } from "axios";
import useSWRMutation from "swr/mutation";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const useCommand = <Request extends {}, Response extends {}>(
  url: string,
  method: "POST" | "PUT" | "DELETE",
  params?: Request
) => {
  const key = [url, JSON.stringify(params)];

  return useSWRMutation<Response, AxiosError>(key, () => {
    if (method === "POST") {
      return fetcher()
        .request({
          url,
          method,
          data: params,
        })
        .then((res) => res.data);
    } else {
      return fetcher()
        .request({
          url,
          method,
          params,
        })
        .then((res) => res.data);
    }
  });
};
