<template>
  <div class="block">
    <label :for="id">{{ label }}</label>
    <input type="text" placeholder="name" value="" :id="id" />
  </div>
</template>
<script>
export default {
  name: "customInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
