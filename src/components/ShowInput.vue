<template>
  <div class="mt-3">
    <div class="border-2 border-black rounded-sm  w-full p-3 mt-2.5 text-left content md:text-base text-xs" v-html="parseText"></div>
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

  computed: {
    parseText() {
      return this.text.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
    },
  },
};
</script>
<style lang="scss"></style>
