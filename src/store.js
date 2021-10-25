import { createStore } from "vuex";
import usersData from "./data/users";

const store = createStore({
  state() {
    return {
      users: usersData,
    };
  },
  getters: {
    getRandomUser: (state) => (index) => {
      return state.users[index];
    },
  },
});

export default store;
