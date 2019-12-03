/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description Axios request instantiation.
 */

import AxiosReques from "@/libs/axios";
import qs from "qs";
import baseUrl from "@/config/baseUrl";

/**
 * @description Create axios.
 * @param {String} baseUrl Request base url map.
 * @param {Object} headers Request headers config.
 * @param {Boolean} isLoading Request loading switch.
 * @returns axios request instance.
 */
const createAxiosRequest = (baseUrl, headers, isLoading) => {
    return new AxiosReques(baseUrl, headers, isLoading);
}

/**
 * @description Axios request params format is JSON.
 * @param {Boolean} isLoading Request loading switch.
 */
const axiosJson = (isLoading) => {
    return createAxiosRequest(
        baseUrl,
        {
            "Content-Type": "application/json;charset=UTF-8"
        },
        isLoading
    );
}

/**
 * @description Axios request params format is FromData.
 * @param {Boolean} isLoading Request loading switch.
 */
const axiosForm = (isLoading) => {
    return createAxiosRequest(
        baseUrl,
        {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        isLoading
    );
}
/**
 * @description Axios request params format is multipart.
 * @param {Boolean} isLoading Request loading switch.
 */
const axiosMultipart = (isLoading) => {
    return createAxiosRequest(
        baseUrl,
        {
            "Content-Type": "multipart/form-data;"
        },
        isLoading
    );
}
/**
 * @description Create axios request function.
 * @param {String} axiosType Request function type name, "axiosForm": FormData, "axiosJson": JSON.
 * @param {String} url Request url.
 * @param {String} method Request method type.
 * @param {Boolean} isLoading Request loading whether show.
 * @param {Object} param Request params.
 */
const createAxios = (axiosType, { url, method, isLoading }, params) => {
    const axios = axiosType(isLoading);
    if (method.toLocaleLowerCase() === "get") {
        return axios.request({
            url,
            params: params ? params : {},
            method
        });
    } else {
        return axios.request({
            url,
            data: params ? params : {},
            method
        });
    }
}

/**
 * @description Request method of params format is JSON.
 * @param {String} url Request url.
 * @param {String} method Request method type.
 * @param {Boolean} isLoading Request loading whether show.
 * @param {Object} param Request params.
 */
export const httpJson = ({ url, method, isLoading }, params) => {
    return createAxios(axiosJson, { url, method, isLoading }, params);
}

/**
 * @description Request method of params format is FormData.
 * @param {String} url Request url.
 * @param {String} method Request method type.
 * @param {Boolean} isLoading Request loading whether show.
 * @param {Object} param Request params.
 */
export const httpForm = ({ url, method, isLoading }, params) => {
    const resParams = (method.toLocaleLowerCase() === 'get') ? params : qs.stringify(params);
    return createAxios(axiosForm, { url, method, isLoading }, resParams);
}
/**
 * @description Request method of params format is multipart.指定传输数据为二进制数据，主要用于图片、mp3、文件等上传；
 * @param {String} url Request url.
 * @param {String} method Request method type.
 * @param {Boolean} isLoading Request loading whether show.
 * @param {Object} param Request params.
 */
export const httpMultipart = ({ url, method, isLoading }, params) => {
    return createAxios(axiosMultipart, { url, method, isLoading }, params);
}
