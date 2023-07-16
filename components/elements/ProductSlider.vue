<template>
  <div class="card_product__slider">
    <div class="slider_nav">
      <ElementsButtonPrev @prevClicked="prevSlide" />
      <ElementsButtonNext @nextClicked="nextSlide" />
    </div>
    <div class="slider_images">
      <nuxt-img
        v-for="(img, index) in images"
        :key="index"
        :class="{ active: currentIndex === index }"
        :src="`/img/products/${img}`"
        :alt="`Product ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    images: Object,
    folder: String,
  })

  const currentIndex = ref(0)

  const prevSlide = () => {
    currentIndex.value =
      (currentIndex.value - 1 + props.images.length) % props.images.length
  }

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }
</script>

<style lang="scss" scoped></style>
