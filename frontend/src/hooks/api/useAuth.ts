import useSWRMutation from "swr/mutation";
import {postRequest} from "@/functions/axios";

export const useCreateAccount = () =>
  useSWRMutation("/auth", postRequest)

export const useLogin = () =>
    useSWRMutation("/login", postRequest)

