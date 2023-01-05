import {get, post, del} from "utils/http";

const PATH = "/v1/service";

export const getAllService = () => get(PATH + "/all");
export const getServiceById = (param = null) => get(PATH + "/" + param);
export const saveService = (params = {}) => post(PATH + "/save", params);
export const deleteServiceById = (param = null) => del(PATH + "/" + param);
export const getAllServiceByCategory = (param  = null) => get(PATH + "/category/" + param);
export const getAllCategoryOption = () => get(PATH + "/category/option");