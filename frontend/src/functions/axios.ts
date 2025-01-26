import axios from "axios";
import {Arguments} from "swr";

type Arg = {
    arg: Arguments;
};

export const postRequest = async (url: string, { arg }: Arg) =>  await fetcher({ url, method: 'post', arg })

type RequestParams = {
    url: string
    method: 'get' | 'post'
    arg?: Arguments
}

const fetcher = async({
  url,
  method,
  arg,
}: RequestParams) => {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/api', // TODO: envから取得するよう改修する
        timeout: 1000,
        responseType: 'json',
        headers: {
            "Content-Type": "application/json",
        }
    })

    instance.interceptors.response.use(
        (response) => response.data,
        (error) => {
            // TODO: エラーハンドリングを実施
            console.log(error)
        }
    )

    switch(method) {
        case 'get':
            return instance.get(url)
        case 'post':
            return instance.post(url, arg)
        default:
            throw new Error('unexpected http request method')
    }
}