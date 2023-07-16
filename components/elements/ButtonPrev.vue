<template>
  <button @click="$emit('prevClicked')">
    <span class="sr-only">Previous product</span>
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 8L7.5 0.205772L7.5 15.7942L0 8Z" fill="none" />
    </svg>
  </button>
</template>

<script setup>
  const emits = defineEmits(['prevClicked'])
</script>

<style lang="scss" scoped></style>
