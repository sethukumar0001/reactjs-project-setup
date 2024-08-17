import { config } from "../env";
import { patch, post, postWithMethod } from "./helpers/http-handler";

//sign-up
export const authRegister = (payload: object) =>
  post(`${config.API_URL}/auth/register`, payload);
