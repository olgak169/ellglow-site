<template>
  <div
    :class="`divider-${color}`"
    class="scroll-title"
    aria-hidden="true"
    ref="scrollDivider"
  >
    <p :id="`scrollingText-${title}`">
      <span v-for="ind in counter" :key="ind">{{ title }}</span>
    </p>
  </div>
</template>

<script setup>
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const props = defineProps({
    title: String,
    color: Number,
    ready: Boolean,
  })
  const scrollDivider = ref(null)
  const counter = ref(0)
  const ctx = ref()

  const changeTitleCount = () => {
    counter.value = Math.round(window.innerWidth / 75 + 5)
  }
  watch(
    () => props.ready,
    newVal => {
      if (newVal) {
        ctx.value = gsap.context(self => {
          const scroll = self.selector(`#scrollingText-${props.title}`)
          gsap.to(scroll, {
            xPercent: -20,
            scrollTrigger: {
              trigger: scroll,
              scrub: true,
            },
          })
        }, scrollDivider.value)
      }
    }
  )
  onMounted(() => {
    changeTitleCount()
    window.addEventListener('resize', changeTitleCount)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', changeTitleCount)
    scrollDivider.value = null
    ctx.value.revert()
  })
</script>
