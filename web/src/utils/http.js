import axios from "axios";
import {common} from "utils/common";

const API = common.DOMAIN;

const getHeader = (hasFile = false) => {
    let accessToken = common.cookiesManager.get(common.userHashId.token) || "";
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


export const get = (endPoint, options = {}) => {
    return axios.get(
        API + endPoint,
        { headers: getHeader(), ...options }
    ).catch((errors) => {
        handleError(errors);
    });
}



export const post = (endPoint, data = {}) => {
    return axios.post(
        API + endPoint,
        data instanceof FormData ? data : JSON.stringify(data),
        {headers: getHeader(data instanceof FormData)}
    ).catch((errors) => {
        handleError(errors);
    });
}

export const put = (endPoint, data = {}) => {
    return axios.put(
        API + endPoint,
        JSON.stringify(data),
        {headers: getHeader()}
    ).catch((errors) => {
        handleError(errors);
    });
}

export const del = (endPoint) => {
    return axios.delete(
        API + endPoint,
        {headers: getHeader()}
    ).catch((errors) => {
        handleError(errors);
    });
}