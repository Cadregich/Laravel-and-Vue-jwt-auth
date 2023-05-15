import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        isAuthenticated: false
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        }
    },
    actions: {
        login({commit}) {
            commit('setAuthentication', true);
        },
        logout({commit}) {
            commit('setAuthentication', false);
        },
        getCookie(context, name) {
            const cookies = document.cookie.split(";");

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }
    },
    getters: {
        Auth: state => state.isAuthenticated
    }
});

export default store;
