/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The Project of user data request list.
 */

// 手机号登录
export const login = {
    url: "auth/login",
    method: "post",
    isLoading: false
}

// 获取当前项目信息
export const getCurrentProjectInfo = {
    url: "projectInfoApp/getCurrentProjectInfo",
    method: "get",
    isLoading: true
}