<template>
  <div>
    <form class="form text-left bg-gray-300 p-3" @submit.prevent="handleRandomUser">
      <button class="form__button border-2 rounded-sm border-black block m-auto">Load random user</button>
      <custom-input type="text" placeholder="some name" id="name" label="Name of user" :value="user.first_name" />
      <custom-input type="text" placeholder="some_email@email.com" id="email" label="Email of user" :value="user.email" />
      <custom-input type="text" placeholder="(000)-000-000" id="phone" label="Phone number of user" :value="user.phone_number" />
      <custom-input type="text" placeholder="add website" id="website" label="Website of user" :value="user.website" />
    </form>
  </div>
</template>
<script>
import CustomInput from "./CustomInput";
import { mapGetters } from "vuex";
import usersData from "../data/users";
export default {
  components: {
    CustomInput,
  },
  name: "FormAddUser",
  computed: {
    ...mapGetters(["getRandomUser"]),
  },
  data() {
    return {
      user: {
        first_name: "some name",
        email: "some_email@email.com",
        phone_number: "(000)-000-000",
        website: "www.somewebsite.com",
      },
    };
  },
  methods: {
    handleRandomUser() {
      const index = Math.floor(Math.random() * usersData.length);
      this.getRandomUser(index);
      this.user = this.getRandomUser(index);
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  width: 100%;

  &__button {
    background-color: #dcddde;
    padding: 10px 15px;

    &:active {
      transform: translateY(5px);
    }
  }
}
</style>
