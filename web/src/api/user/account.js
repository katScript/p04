import {post} from "utils/http";

const PATH = "/v1/auth";

export const login = (params = {}) => post(PATH + "/login", params);
export const register = (params = {}) => post(PATH + "/register", params);