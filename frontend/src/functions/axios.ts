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
            client: localStorage.getItem('client'),
            uid: localStorage.getItem('uid'),
            "access-token": localStorage.getItem('access-token'),
        }
    })

    instance.interceptors.response.use(
        (response) => {
            // TODO: LocalStorageに認証情報を保存しているが、別の方法に切り替えたい
            if (
                response.headers['access-token'] &&
                response.headers['client'] &&
                response.headers['uid']
            ) {
                localStorage.setItem('access-token', response.headers['access-token'])
                localStorage.setItem('client', response.headers['client'])
                localStorage.setItem('client', response.headers['uid'])
            }

            return response.data
        },
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