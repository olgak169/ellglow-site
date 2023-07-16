<template>
  <button @click="$emit('nextClicked')">
    <span class="sr-only">Next product</span
    ><svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8L0.5 15.7942L0.5 0.205771L8 8Z" fill="none" />
    </svg>
  </button>
</template>

<script setup>
  const emits = defineEmits(['nextClicked'])
</script>

<style lang="scss" scoped></style>
