import {post} from "utils/http";

const PATH = "/v1/auth";

export const login = (params = {}) => {
    return post(PATH + "/login", params)
        .catch((e) => {
            throw e;
        });
};

export const changePassword = (params = {}) => post(PATH + "/password/change", params).catch((e) => {throw e;});