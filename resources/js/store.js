import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: () => ({
            users: {}
        }),

        actions: {
            getUsers({ commit }, id) {
                const posts = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
                commit('USERS', posts)
            }
        },

        mutations: {
            USERS(state, data) {
                state.users = Object.assign({}, data)
                // Vue.set(state.users, data)
            }
        }
    })
}