import {get, post, del} from "utils/http";

const PATH = "/v1/package";

export const getAllPackage = () => get(PATH + "/all");
export const getPackageById = (param = null) => get(PATH + "/" + param);
export const savePackage = (params = {}) => post(PATH + "/save", params);
export const deletePackageById = (param = null) => del(PATH + "/" + param);