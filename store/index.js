import Vuex from 'vuex'

const appStore = () => {
    return new Vuex.Store({
        state: {
            breed_list: {},
            dog_list: [],
            page_count: 1,  // 追加
        },
        mutations: {
            breed_list_update(state, payload) {
                state.breed_list = { ...payload };
            },
            dog_list_update(state, payload) {
                state.dog_list = [...payload];
            },

            // 追加
            page_count_update(state, payload) {
                state.page_count = parseInt(payload);
            },
        }
    })
};

export default appStore;