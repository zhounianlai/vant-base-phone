/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The vue's store of user data.
 */

import { httpForm } from "@/libs/http";
import { login } from "@/api/user";
import { Toast } from "vant";
import $cookie from "@/storage/cookie";
import $sessionStorage from "@/storage/sessionStorage";
import { Promise } from "q";
import { setToken, getToken } from "@/libs/utils";

export default {
    // User's store of state.
    state: {
        accessToken: getToken(),
        mobilePhone: $cookie.get("mobilePhone") || "",
        userInfo: JSON.parse($cookie.get("userInfo") ? $cookie.get("userInfo") : "{}") || {},
    },
    // User's store of getters.
    getters: {},
    // User's store of mutations.
    mutations: {
        SET_ACCESS_TOKEN(state, accessToken) {
            state.accessToken = accessToken;
            setToken(accessToken);
        },
        SET_MOBILE_PHONE(state, mobilePhone) {
            $cookie.set("mobilePhone", mobilePhone);
            state.mobilePhone = mobilePhone;
        },
        SET_USER_INFO(state, userInfo) {
            $cookie.set("userInfo", JSON.stringify(userInfo));
            state.userInfo = userInfo;
        },
        SET_USER_PROJECT_INFO(state, userProjectInfo) {
            $sessionStorage.set("userProjectInfo", JSON.stringify(userProjectInfo));
            state.userProjectInfo = userProjectInfo;
        }
    },
    // User's store of actions.
    actions: {
        /**
         * @description Login by mobile.
         */
        actionsLogin({ commit }, data) {
            return new Promise((resolve, reject) => {
                httpForm(login, data).then(
                    result => {
                        if (result.isSuccess === 1) {
                            commit("SET_ACCESS_TOKEN", result.data.token ? result.data.token : "");
                            commit("SET_USER_INFO", result.data ? result.data : {});

                            //手机号登录 loginType 2
                            $sessionStorage.set("loginType", '2');

                        }
                        resolve(result);
                    },
                    error => {
                        reject(error);
                        Toast.fail("手机号登录服务异常！");
                    }
                );
            });
        },

        /**
         * @description Login by user's name.
         */
        // actionsLoginByUserName({ commit }, data) {
        //     return new Promise((resolve, reject) => {
        //         httpForm(loginByUserName, data).then(
        //             result => {
        //                 if (result.isSuccess === 1) {
        //                     commit("SET_ACCESS_TOKEN", result.data.token ? result.data.token : "");
        //                     commit("SET_MOBILE_PHONE", result.data.mobile ? result.data.mobile : "");
        //                     commit("SET_USER_INFO", result.data ? result.data : {});
        //                 }
        //                 resolve(result);
        //             },
        //             error => {
        //                 reject(error);
        //                 Toast.fail("用户名密码登录服务异常！");
        //             }
        //         );
        //     });
        // },

        /**
         * @description User register.
         */
        // actionsRegister({ commit }, data) {
        //     return new Promise((resolve, reject) => {
        //         httpJson(register, data).then(
        //             result => {
        //                 if (result.isSuccess === 1) {
        //                     commit("SET_ACCESS_TOKEN", result.data.access_token ? result.data.access_token : "");
        //                     commit("SET_MOBILE_PHONE", result.data.mobile ? result.data.mobile : "");
        //                     commit("SET_USER_INFO", result.data ? result.data : {});
        //                 }
        //                 resolve(result);
        //             },
        //             error => {
        //                 reject(error)
        //                 Toast.fail("注册新用户服务异常！");
        //             }
        //         );
        //     });
        // }
    }
}