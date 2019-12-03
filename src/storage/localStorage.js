/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description localStorage function.
 */

const localStorageList = [];

const get = (key) => {
    if (localStorageList.indexOf(key) === -1) {
        throw new Error(`localStorage ${key} is not register.`);
    }
    return localStorage.getItem(key);
};

const set = (key, value) => {
    if (localStorageList.indexOf(key) === -1) {
        throw new Error(`localStorage ${key} is not register.`);
    }
    localStorage.setItem(key, value);
};

const remove = key => {
    if (localStorageList.indexOf(key) === -1) {
        throw new Error(`localStorage ${key} is not register.`);
    }
    localStorage.removeItem(key);
};

const clear = () => {
    window.localStorage.clear();
};

export default {
    get,
    set,
    remove,
    clear,
    localStorageList
};
