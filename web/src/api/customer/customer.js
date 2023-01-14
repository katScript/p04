import {get, post, del} from "utils/http";

const PATH = "/v1/customer";

// customer information
export const registerCustomer = (params = {}) => post(PATH + "/auth/register", params);
export const getCustomerById = (params) => get(PATH + "/" + params);
export const getCustomerByUserId = (params) => get(PATH + "/user/" + params);
export const getAllCustomer = () => get(PATH + "/all");
export const saveCustomerInfo = (params = {}) => post(PATH + "/save", params).catch((e) => {throw e;});

// customer billing
export const getAllBillingOption = () => get(PATH + "/billing/type").catch((e) => {throw e;});
export const getAllHostOption = () => get(PATH + "/billing/card/host").catch((e) => {throw e;});
export const saveCustomerBillingCard = (id = null, params = {}) => post(`${PATH}/${id}/billing/card/save`, params).catch((e) => {throw e;});

// balance history
export const getAllCustomerBalanceHistory = (id = null) => get(`${PATH}/${id}/balance/all`).catch((e) => {throw e;});
export const changeCustomerBalance = (id = null, params = {}) => post(`${PATH}/${id}/balance/change`, params).catch((e) => {throw e;});

// order history
export const getAllCustomerOrderHistory = (id = null) => get(`${PATH}/${id}/log/all`).catch((e) => {throw e;});

// card request
export const getCustomerCardDetail = (customerId = null, id = null) => get(`${PATH}/${customerId}/billing/card/${id}`).catch((e) => {throw e;});
export const applyCard = (customerId = null, params = {}) => post(`${PATH}/${customerId}/billing/card/apply`, params).catch((e) => {throw e;});