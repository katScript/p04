import {post} from "utils/http";

const PATH = "/v1/order";

export const placeOrder = (params = {}) => post(PATH + "/place", params);