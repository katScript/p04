import {get} from "utils/http";

const PATH = "/v1/admin";

export const getAdminById = (params) => get(`${PATH}/${params}`);
export const getAllAdmin = () => get(`${PATH}/all`);
export const getAdminByUserId = (id) => get(`${PATH}/user/${id}`);