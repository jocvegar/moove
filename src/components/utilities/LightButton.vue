<script>
export default {
  name: "LightButton",
};
</script>

<script setup>
const emit = defineEmits(["navigate"]);

function handleClick() {
  emit("navigate");
}
</script>
<template>
  <button
    @click="handleClick()"
    class="
      inline-flex
      text-gray-700
      bg-gray-100
      border-0
      py-2
      px-8
      focus:outline-none
      hover:bg-gray-200
      rounded
      text-lg
    "
  >
    <slot></slot>
  </button>
</template>
