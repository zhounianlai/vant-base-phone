/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The vue's store of app data. 
 */

// import { getOrganByRelam } from "@/api/user";
// import { getProjectInfoById } from "@/api/data";
// import { httpJson } from "@/libs/http";
// import { Toast } from "vant";
// import $sessionStorage from "@/storage/sessionStorage";
// import REALM_NAME from "@/config/realmName";

export default {
    // App's store of state.
    state: {
        // projectId: $sessionStorage.get("projectId") ? $sessionStorage.get("projectId") : "",
        // personalShow: false,
        // projectInfo: $sessionStorage.get("projectInfo") ? JSON.parse($sessionStorage.get("projectInfo")) : {},
        // docPreviewInfo: $sessionStorage.get("docPreviewInfo") ? JSON.parse($sessionStorage.get("docPreviewInfo")) : {}
    },
    // App's store of getters.
    getters: {},
    // App's store of mutations.
    mutations: {

        // SET_PROJECT_INFO (state, projectInfo) {
        //   $sessionStorage.set("projectInfo", JSON.stringify(projectInfo));
        //   state.projectInfo = projectInfo;
        // }
    },
    // App's store of actions.
    actions: {

        // actionsGetOrganByRelam ({ commit }) {
        //   httpJson(getOrganByRelam, { realm: REALM_NAME }).then(
        //     result => {
        //       if (result.isSuccess === 1) {
        //         commit("SET_ORGAN_INFO", result.data);
        //       } else {
        //         if (result.msg) {
        //           Toast.fail(result.msg);
        //         }
        //       }
        //     },
        //     error => {
        //       if (error) {
        //         Toast.fail("请求机构信息服务异常！");
        //       }
        //     }
        //   );
        // },

    }
}