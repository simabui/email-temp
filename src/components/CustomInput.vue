<template>
  <div>
    <label :for="id" class="inline-block w-full my-2 font-bold text-sm">{{ label }}</label>
    <input
      class="border border-2 border-gray-400 px-2 py-2 text-sm w-full"
      :placeholder="placeholder"
      :type="type"
      :id="id"
      :value="value"
    />
  </div>
</template>
<script>
export default {
  name: "customInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped></style>
