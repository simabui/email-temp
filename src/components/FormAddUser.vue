<template>
  <div>
    <form class="form">
      <button class="form__button border-2 rounded-sm border-black">Load random user</button>
      <custom-input type="text" placeholder="add name" id="name" label="Name of user" />
      <custom-input type="text" placeholder="add email" id="email" label="Email of user" />
      <custom-input type="number" placeholder="add phone" id="phine" label="Phone number of user" />
      <custom-input type="text" placeholder="add website" id="website" label="Website of user" />
    </form>
  </div>
</template>
<script>
import CustomInput from "./CustomInput.vue";
export default {
  components: {
    CustomInput,
  },
};
</script>
<style lang="scss" scoped>
.form {
  width: 100%;

  &__button {
    background-color: #dcddde;
    padding: 10px 15px;
  }
}
</style>
