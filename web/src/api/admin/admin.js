import {get, post, del} from "utils/http";

const PATH = "/v1/admin";

export const getAdminById = (params) => get(`${PATH}/${params}`);
export const getAllAdmin = () => get(`${PATH}/all`);
export const getAdminByUserId = (id) => get(`${PATH}/user/${id}`);
export const registerAdmin = (params) => post(`${PATH}/auth/register`, params).catch((e) => {throw e;});
export const saveAdminData = (params) => post(`${PATH}/save`, params).catch((e) => {throw e;});
export const deleteAdmin = (id) => del(`${PATH}/${id}`).catch((e) => {throw e;});