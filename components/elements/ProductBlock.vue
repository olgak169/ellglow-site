<template>
  <section class="content product_card-bg mb__l">
    <div class="card_product__container shadow_md">
      <div class="card_product">
        <div class="card_product__content">
          <p class="text__w-40">{{ content.text }}</p>
        </div>
        <ElementsProductSlider :images="content.images" :folder="content.folder" />
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    content: Object,
  })
</script>

<style lang="scss" scoped></style>
