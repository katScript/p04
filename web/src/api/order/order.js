import {get, post} from "utils/http";

const PATH = "/v1/order";

export const placeOrder = (params = {}) => post(PATH + "/place", params).catch((e) => {throw e;});
export const getOrderById = (id = null) => get(PATH + "/" + id).catch((e) => {throw e;});
export const getAllOrder = () => get(PATH + "/all").catch((e) => {throw e;});
export const getAllOrderByCustomerId = (id) => get(PATH + "/customer/" + id).catch((e) => {throw e;});
export const getOrderHistory = (customerId, serviceId) => get(`${PATH}/customer/${customerId}/service/${serviceId}`).catch((e) => {throw e;});