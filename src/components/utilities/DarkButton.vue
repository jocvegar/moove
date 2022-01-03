<script>
export default {
  name: "DarkButton",
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
      text-white
      bg-slate-800
      border-0
      py-2
      px-8
      focus:outline-none
      hover:bg-slate-900
      rounded
      text-lg
    "
  >
    <slot></slot>
  </button>
</template>
