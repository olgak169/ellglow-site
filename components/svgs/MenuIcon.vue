<template>
  <svg
    aria-hidden="true"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="menuBtn">
      <circle cx="30" cy="30" r="29.5" stroke="#B71357" />
      <g id="menu" v-if="!menuOpen">
        <line x1="10" y1="29.75" x2="50" y2="29.75" stroke="#B71357" stroke-width="0.5" />
        <line x1="15" y1="37.75" x2="45" y2="37.75" stroke="#B71357" stroke-width="0.5" />
        <line x1="15" y1="19.75" x2="45" y2="19.75" stroke="#B71357" stroke-width="0.5" />
      </g>
      <g id="close" v-else>
        <line
          x1="15.8232"
          y1="44.1075"
          x2="44.1075"
          y2="15.8232"
          stroke="#c72462"
          stroke-width="1"
        />
        <line
          x1="16.1768"
          y1="15.8232"
          x2="44.461"
          y2="44.1075"
          stroke="#c72462"
          stroke-width="1"
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
  const props = defineProps({
    menuOpen: Boolean,
  })
</script>
