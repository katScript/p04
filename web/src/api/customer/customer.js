import {get} from "utils/http";

const PATH = "/v1/customer";

export const getCustomerById = (params) => get(PATH + "/" + params);
export const getCustomerByUserId = (params) => get(PATH + "/user/" + params);