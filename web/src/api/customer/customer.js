import {get, post} from "utils/http";

const PATH = "/v1/customer";

export const registerCustomer = (params = {}) => post(PATH + "/auth/register", params);
export const getCustomerById = (params) => get(PATH + "/" + params);
export const getCustomerByUserId = (params) => get(PATH + "/user/" + params);