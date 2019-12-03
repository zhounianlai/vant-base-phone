/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description sessionStorage function.
 */

const sessionStorageList = ["loginType"];

const set = (key, value) => {
    if (sessionStorageList.indexOf(key) === -1) {
        throw new Error(`sessionStorage ${key} is not register.`);
    }
    sessionStorage.setItem(key, value);
};

const get = key => {
    if (sessionStorageList.indexOf(key) === -1) {
        throw new Error(`sessionStorage ${key} is not register.`);
    }
    return sessionStorage.getItem(key);
};

const remove = key => {
    if (sessionStorageList.indexOf(key) === -1) {
        throw new Error(`sessionStorage ${key} is not firegisternd.`);
    }
    sessionStorage.removeItem(key);
};

const clear = () => {
    window.sessionStorage.clear();
};

export default {
    set,
    get,
    remove,
    clear,
    sessionStorageList
};
