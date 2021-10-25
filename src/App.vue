<template>
  <div class="container mx-auto grid grid-cols-6 px-4">
    <form-add-user />
    <email-template />
  </div>
</template>

<script>
import FormAddUser from "./components/FormAddUser.vue";
import EmailTemplate from "./components/EmailTemplate.vue";
export default {
  name: "App",
  components: {
    FormAddUser,
    EmailTemplate,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
