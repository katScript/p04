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
export const getAllCustomerBillingAddress = (id = null) => get(`${PATH}/${id}/billing/all`).catch((e) => {throw e;});
export const getCustomerBillingAddress = (id = null, billingId = null) => get(`${PATH}/${id}/billing/${billingId}`).catch((e) => {throw e;});
export const deleteCustomerBillingAddress = (id = null, billingId = null) => del(`${PATH}/${id}/billing/${billingId}`).catch((e) => {throw e;});
export const saveCustomerBillingAddress = (id = null, params = {}) => post(`${PATH}/${id}/billing/save`, params).catch((e) => {throw e;});
export const saveCustomerBillingCard = (id = null, params = {}) => post(`${PATH}/${id}/billing/card/save`, params).catch((e) => {throw e;});

// balance history
export const getAllCustomerBalanceHistory = (id = null) => get(`${PATH}/${id}/balance/all`);

// order history
export const getAllCustomerOrderHistory = (id = null) => get(`${PATH}/${id}/log/all`).catch((e) => {throw e;});