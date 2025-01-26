import useSWRMutation from "swr/mutation";
import {postRequest} from "@/functions/axios";

export const useCreateUser = () =>
  useSWRMutation("/auth", postRequest)

