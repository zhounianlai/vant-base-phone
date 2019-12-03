/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The Project common utils.
 */

import $cookie from "@/storage/cookie";
import config from "@/config/index";
// import { strIsReplace } from "@/libs/tools";

const TOKEN_KEY = "access_token";
const MOBILE_PHONE = "mobilePhone";
const { cookieExpires } = config;
const ENV = process.env.NODE_ENV;


/**
 * @description 获取网页对应标题
 * @param {String} name => 当前路由 name
 * @param {Array} routes => 注册的路由数据
 * @returns 网页标题
 */
export const getWebTitle = (name, routes) => {
    const length = routes.length;
    for (let i = 0; i < length; i++) {
        const element = routes[i];
        if (name === element.name) {
            return element.title;
        } else {
            if (element.children && element.children.length !== 0) {
                if (getWebTitle(name, element.children)) {
                    return getWebTitle(name, element.children);
                }
            }
        }
    }
}

/**
 * @description 设置网页标题
 * @param {String} name => 当前路由名称
 * @param {Object} routers => 当前路由列表数据
 * @param {Object} window => winodw 对象
 */
export const setWebTitle = (name, routers, window) => {
    const webTitle = getWebTitle(name, routers);
    window.document.title = webTitle;
    window.scrollTo(0, 0);
}

/**
 * @description Clear all cookie.
 */
export const cookieRemoveAll = () => {
    $cookie.cookieList.forEach(element => {
        if (ENV === "development") {
            $cookie.remove(element);
        } else {
            if (TOKEN_KEY === element) {
                $cookie.remove(element, { domain: "stu.teacher.com.cn" });
            } else {
                $cookie.remove(element);
            }
        }
    });
}

/**
 * @description Get access token.
 */
export const getToken = () => {
    const token = $cookie.get(TOKEN_KEY);
    if (token) {
        return token;
    } else {
        return false;
    }
}

/**
 * @description Set access token.
 */
export const setToken = (token) => {
    if (ENV === "development") {
        // 本地测试环境 token 存储
        $cookie.set(TOKEN_KEY, token, { expires: cookieExpires || 1 });
    } else {
        // 打包线上环境 token 存储
        $cookie.set(TOKEN_KEY, token, { expires: cookieExpires || 1, domain: "stu.teacher.com.cn" });
    }
}

/**
 * @description Get mobile phone.
 */
export const getMobile = () => {
    const mobile = $cookie.get(MOBILE_PHONE);
    if (mobile) {
        return mobile;
    } else {
        return false;
    }
}

/**
 * @description tips user login dialog.
 */
export const remindUserLogin = (vm) => {
    vm.$dialog.confirm({
        title: "提示",
        message: "您还未登录，请先登录！"
    }).then(() => {
        vm.$router.replace({
            name: "login"
        });
    }).catch(() => {
        // on cancel
    });
}
