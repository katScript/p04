import {get, post} from "utils/http";

const PATH = "/v1/customer";

// customer information
export const registerCustomer = (params = {}) => post(PATH + "/auth/register", params);
export const getCustomerById = (params) => get(PATH + "/" + params);
export const getCustomerByUserId = (params) => get(PATH + "/user/" + params);
export const getAllCustomer = () => get(PATH + "/all");

// customer billing
export const getAllCustomerBillingAddress = (id = null) => get(`${PATH}/${id}/billing/all`);

// balance history
export const getAllCustomerBalanceHistory = (id = null) => get(`${PATH}/${id}/balance/all`);