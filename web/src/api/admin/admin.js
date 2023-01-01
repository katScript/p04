import {get} from "utils/http";

const PATH = "/v1/admin";

export const getCustomerById = (params) => get(PATH + "/" + params);