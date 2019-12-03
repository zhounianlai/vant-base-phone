/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description cookie function.
 */

import JsCookie from "js-cookie";

const cookieList = ["mobilePhone", "access_token", "userInfo"];

const set = (key, value, payload) => {
    if (cookieList.indexOf(key) === -1) {
        throw new Error(`cookie ${key} is not register.`);
    }
    if (payload) {
        JsCookie.set(key, value, payload);
    } else {
        JsCookie.set(key, value);
    }
};

const get = (key, payload) => {
    if (cookieList.indexOf(key) === -1) {
        throw new Error(`cookie ${key} is not register.`);
    }
    if (payload) {
        return JsCookie.get(key, payload);
    } else {
        return JsCookie.get(key);
    }
};

const remove = (key, payload) => {
    if (cookieList.indexOf(key) === -1) {
        throw new Error(`cookie ${key} is not register.`);
    }
    if (payload) {
        JsCookie.remove(key, payload);
    } else {
        JsCookie.remove(key);
    }
};

export default {
    set,
    get,
    remove,
    cookieList
};
