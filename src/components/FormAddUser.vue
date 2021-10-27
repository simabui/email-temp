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
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  components: {
    CustomInput,
  },
  name: "FormAddUser",
  computed: {
    ...mapState(["user", "users"]),
    ...mapGetters(["getRandomUser"]),
  },
  created() {
    this.generateRandomUser();
  },
  methods: {
    ...mapMutations(["setRandomUser"]),
    handleRandomUser() {
      this.generateRandomUser();
    },
    generateRandomUser() {
      const index = Math.floor(Math.random() * this.users.length);
      const newUser = this.getRandomUser(index);
      this.setRandomUser({ user: newUser });
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
