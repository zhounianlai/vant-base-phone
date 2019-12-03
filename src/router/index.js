/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The vue's router of create and handle. 
 */

import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
// import config from "@/config/index";
import { setWebTitle } from "@/libs/utils";

Vue.use(Router);
// const LOGIN_PAGE_NAME = "login";
// const { homePage } = config;

const router = new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: routes
});

// Before the router redirect.
// router.beforeEach((to, from, next) => {
//   const TOKEN = getToken();
//   const MOBILE = getMobile();
//   if (!TOKEN && !MOBILE) {
//     // 未登录状态
//     if (to.meta.access === false) {
//       next();
//     } else {
//       next({
//         name: LOGIN_PAGE_NAME
//       });
//     }
//   } else if (TOKEN && MOBILE) {
//     // 已登录状态
//     if (to.meta.access === false) {
//       next({
//         name: homePage
//       });
//     } else {
//       next();
//     }
//   } else {
//     if (to.meta.access === false) {
//       next();
//     } else {
//       next({
//         name: LOGIN_PAGE_NAME
//       });
//     }
//   }
// });

// After the router redirect.
router.afterEach(to => {
    setWebTitle(to.name, routes, window);
});

export default router;
