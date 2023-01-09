import {get, post} from "utils/http";

const PATH = "/v1/user";

export const getUserById = (param = null) => get(PATH + "/" + param);
export const getAllUser = () => get(PATH + "/all");