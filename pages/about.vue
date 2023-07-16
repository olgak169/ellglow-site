<template>
  <main>
    <div class="hero hero_about">
      <video
        playsinline
        autoplay="true"
        muted
        loop
        :src="'./img/about/bg-video.mp4'"
        type="video/mp4"
      ></video>
    </div>
    <ElementsDividerScrollTitle title="About" :color="1" :ready="ready" />
    <div class="container">
      <section class="mblock__2xl pblock__xl">
        <div class="about_container">
          <div class="about_content flow minline__auto">
            <p class="text__w-50" v-for="(text, ind) in content.textContent" :key="ind">
              {{ text }}
            </p>
          </div>
          <div class="gallery__slider-images">
            <div class="gallery__slider-inner">
              <div class="gallery__slide-image">
                <nuxt-img
                  loading="lazy"
                  :class="{ active: currentAboutSlide === ind }"
                  v-for="(img, ind) in content.aboutGallery"
                  :key="ind"
                  :src="`/img/about/${img}`"
                  :alt="`EllGlow salon image ${ind + 1}`"
                />
              </div>
            </div>
            <div class="gallery__slider-nav flex pt__m">
              <button
                class="gallery__slider-btn"
                :class="{ active: currentAboutSlide === ind }"
                v-for="(dot, ind) in content.aboutGallery"
                :key="ind"
                @click="currentAboutSlide = ind"
              >
                <span class="sr-only">Go to slide number {{ ind + 1 }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <ElementsDividerScrollTitle title="Process" :color="2" :ready="ready" />
    <div class="container">
      <section class="mblock__3xl">
        <div class="gallery__slider-blocks">
          <div
            :class="{ active: currentLocSlide === ind }"
            class="gallery__slide-block"
            v-for="(slide, ind) in content.locationGallery"
            :key="ind"
            :style="{ backgroundImage: `url(/img/about/${slide})` }"
            @click="currentLocSlide = ind"
          ></div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  import transitionConfig from '../composables/transitionConfig'
  definePageMeta({
    pageTransition: transitionConfig,
  })
  const props = defineProps({
    dataSet: Object,
  })
  const content = props.dataSet.aboutPage
  const { transitionState } = useTransitionComposable()

  const ready = ref(false)
  const currentLocSlide = ref(0)
  const currentAboutSlide = ref(0)

  watch(
    () => transitionState.transitionComplete,
    newVal => {
      if (newVal) {
        ready.value = true
      }
    }
  )
</script>
