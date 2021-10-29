<template>
  <div class="col-span-4 mt-3">
    <div class="text-left">
      <button class="bg-blue-600 text-gray-100 p-1">save to localStorate</button>
      <button class="bg-blue-600 text-gray-100 p-1 ml-3">insert from localStorate</button>
    </div>
    <div class="border-2 border-black rounded-sm  w-full p-3 mt-2.5 text-left content " v-html="text"></div>
  </div>
</template>
<script>
export default {
  name: "showInput",
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  watch: {},
  computed: {
    parseText() {
      return this.text.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
    },
  },
};
</script>
<style lang="scss"></style>
