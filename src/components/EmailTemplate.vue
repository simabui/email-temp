<template>
  <div class="col-span-4">
    <div class="text-left">
      <span>Insert token:</span>
      <button class="bg-green-600 text-gray-100 p-1" @click="handleClick('first_name')">name</button>
      <button class="bg-green-600 text-gray-100 p-1" @click="handleClick('email')">email</button>
      <button class="bg-green-600 text-gray-100 p-1" @click="handleClick('phone_number')">phone</button>
      <button class="bg-green-600 text-gray-100 p-1" @click="handleClick('website')">website</button>
    </div>
    <div
      class="border-2 border-black rounded-sm h-full w-full p-3 mt-2.5 text-left content"
      contenteditable="true"
      v-html="html"
      ref="input"
      @input="handleInput($event)"
    ></div>
    <show-input :text="textToDisplay" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ShowInput from "./ShowInput";

export default {
  name: "EmailTemplate",
  components: {
    ShowInput,
  },
  data() {
    return {
      html: "",
      textToDisplay: "",
    };
  },
  methods: {
    handleClick(key) {
      const token = this.getUserAttribute(key);
      const contentOfInput = this.$refs.input.innerHTML;
      const tokenTemplate = `&nbsp<span class="inline-block border-2 border-dashed border-green-700 p-1 mb-3" contenteditable="false">${token}</span>&nbsp`;
      this.html = contentOfInput + tokenTemplate;
      this.textToDisplay = this.html;
    },
    handleInput() {
      this.textToDisplay = this.$refs.input.innerHTML;
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
  background-color: #fafaf8;
}
.highlighted {
  display: inline-block;
  border: 2px dashed #81bbab;
  padding: 1px;
  margin-bottom: 10px;
}
</style>
