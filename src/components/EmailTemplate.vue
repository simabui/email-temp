<template>
  <div class="lg:col-span-4 md:col-span-3 col-span-6">
    <div class="lg:text-left sm:text-center lg:mt-0 mt-2">
      <span class="md:text-base text-xs">Insert token:</span>
      <button class="bg-green-600 text-gray-100 p-1 ml-3 md:text-base text-xs" @click="handleClick('first_name')">name</button>
      <button class="bg-green-600 text-gray-100 p-1 ml-3 md:text-base text-xs" @click="handleClick('email')">email</button>
      <button class="bg-green-600 text-gray-100 p-1 ml-3 md:text-base text-xs" @click="handleClick('phone_number')">phone</button>
      <button class="bg-green-600 text-gray-100 p-1 ml-3 md:text-base text-xs" @click="handleClick('website')">website</button>
    </div>
    <div
      class="border-2 border-black rounded-sm h-full w-full p-3 mt-2.5 text-left content md:text-base text-xs"
      contenteditable="true"
      v-html="html"
      ref="input"
      @input="handleInput($event)"
    ></div>
    <div class="text-left mt-2">
      <button class="bg-blue-600 text-gray-100 lg:p-2 p-1 md:text-base text-xs" @click="saveToLocalStorage">Save to local storage</button>
      <button class="bg-blue-600 text-gray-100 lg:p-2 p-1 ml-3 md:text-base text-xs" @click="loadFromLocalStorage">
        Insert from local storage
      </button>
    </div>
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
  watch: {
    html(value) {
      this.textToDisplay = value;
    },
  },
  methods: {
    handleClick(key) {
      const token = this.getUserAttribute(key);
      const contentOfInput = this.$refs.input.innerHTML;
      const tokenTemplate = `&nbsp<span class="inline-block border-2 border-dashed border-green-700 p-1 mb-3" contenteditable="false">${token}</span>&nbsp`;
      this.html = contentOfInput + tokenTemplate;
    },
    handleInput() {
      this.textToDisplay = this.$refs.input.innerHTML;
    },
    saveToLocalStorage() {
      localStorage.setItem("emailTemplate", this.textToDisplay);
    },
    loadFromLocalStorage() {
      const savedTemplate = localStorage.getItem("emailTemplate");
      if (savedTemplate) {
        this.html = savedTemplate;
      }
    },
  },
  computed: {
    ...mapGetters(["getUserAttribute"]),
  },
};
</script>
<style lang="scss" scoped>
button {
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
