<template>
  <div class="col-span-4">
    <div class="text-left">
      <span>Insert token:</span>
      <button class="bg-green-800 text-gray-100 p-1" @click="handleClick('first_name')">name</button>
      <button class="bg-green-800 text-gray-100 p-1" @click="handleClick('email')">email</button>
      <button class="bg-green-800 text-gray-100 p-1" @click="handleClick('phone_number')">phone</button>
      <button class="bg-green-800 text-gray-100 p-1" @click="handleClick('website')">website</button>
    </div>
    <textarea class="border-2 border-black rounded-sm h-full w-full p-3 mt-2.5"></textarea>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "EmailTemplate",
  methods: {
    handleClick(key) {
      console.log(this.getUserAttribute(key));
    },
  },
  computed: {
    ...mapGetters(["getUserAttribute"]),
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-left: 10px;

  &:active {
    transform: scale(0.9);
  }
}
textarea {
  resize: none;
}
</style>
