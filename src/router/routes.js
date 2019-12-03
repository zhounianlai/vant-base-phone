/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The vue"s router list.
 */

export default [
    {
        path: "/",
        name: "",
        title: "",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        title: "登录",
        redirect: "/login/loginByMobile",
        component: () => import("@/views/login/login.vue"),
        children: [
            {
                path: "loginByMobile",
                name: "loginByMobile",
                title: "登录",
                desc: "手机号登录",
                meta: {
                    access: false,
                    keepAlive: true
                },
                component: () => import("@/views/login/views/loginByMobile.vue")
            },
            {
                path: "loginByUsername",
                name: "loginByUsername",
                title: "登录",
                desc: "用户名登录",
                meta: {
                    access: false,
                    keepAlive: true
                },
                component: () => import("@/views/login/views/loginByUsername.vue")
            }
        ]
    },
    {
        path: "/tabPage",
        name: "tabPage",
        redirect: "/tabPage/studyplanList",
        title: "学习首页",
        desc: "学习tab切换父级页面",
        meta: {
            keepAlive: true
        },
        component: () => import("@/views/tabPage/tabPage.vue"),
        children: [
            {
                path: "home",
                name: "home",
                title: "首页",
                component: () => import("@/views/home/home.vue")
            },
            {
                path: "job",
                name: "job",
                title: "作业",
                component: () => import("@/views/job/job.vue")
            },
            {
                path: "learn",
                name: "learn",
                title: "学习",
                component: () => import("@/views/learn/learn.vue")
            },
            {
                path: "my",
                name: "my",
                title: "我的",
                meta: {
                    keepAlive: true
                },
                component: () => import("@/views/my/my.vue")
            }
        ]
    },
    {
        path: "/detail",
        name: "detail",
        title: "详情",
        desc: "详情",
        component: () => import("@/views/job/detail/index.vue")
    },
]