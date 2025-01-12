import fetcher from "@/libs/axios/fetcher";
import { AxiosError, AxiosRequestConfig } from "axios";
import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const useQuery = <Request extends {}, Response extends {}>(
  url: string,
  params?: Request,
  axiosConfig?: AxiosRequestConfig
) => {
  const key = [url, JSON.stringify(params)];

  return useSWR<Response, AxiosError>(key, () =>
    fetcher()
      .request({
        url,
        method: "GET",
        params,
        ...axiosConfig,
      })
      .then((res) => res.data)
  );
};
