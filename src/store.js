import { createStore } from "vuex";
import usersData from "./data/users";

const store = createStore({
  state() {
    return {
      user: {
        first_name: "some name",
        email: "some_email@email.com",
        phone_number: "(000)-000-000",
        website: "www.somewebsite.com",
      },
      users: usersData,
    };
  },
  mutations: {
    setRandomUser(state, payload) {
      state.user = payload.user;
    },
  },
  getters: {
    getRandomUser: (state) => (index) => {
      return state.users[index];
    },
    getUserAttribute: (state) => (key) => {
      return state.user[key];
    },
  },
});

export default store;
