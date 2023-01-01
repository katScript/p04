import axios from "axios";
import common from "./common";

const accessToken = common.cookiesManager.get(common.userHashId.token) || "";

const API = common.DOMAIN;

const getHeader = (hasFile = false) => {
    return {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": hasFile ? "multipart/form-data" : "application/json"
    };
};

const handleError = (error) => {
    if (error?.response?.status === 401) {
        localStorage.removeItem("token");
    }

    throw error;
};


export const get = (endPoint, options = {}) =>
    axios.get(
        API + endPoint,
        { headers: getHeader(), ...options }
    ).catch(handleError);


export const post = (endPoint, data = {}) =>
    axios.post(
        API + endPoint,
        data instanceof FormData ? data : JSON.stringify(data),
        { headers: getHeader(data instanceof FormData) }
    ).catch(handleError);

export const put = (endPoint, data = {}) =>
    axios.put(
        API + endPoint,
        JSON.stringify(data),
        { headers: getHeader() }
    ).catch(handleError);

export const del = (endPoint) =>
    axios.delete(
        API + endPoint,
        { headers: getHeader() }
    ).catch(handleError);