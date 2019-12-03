/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The vue's store data.
 */

import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import app from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
    // Vue's store of state.
    state: {},
    // Vue's store of mutations.
    mutations: {},
    // Vue's store of actions.
    actions: {},
    // Vue's store of modules.
    modules: {
        user,
        app
    }
});