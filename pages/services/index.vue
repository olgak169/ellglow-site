<template>
  <main ref="main">
    <div class="hero hero_pattern-1">
      <div class="hero_services flex-column shadow_md">
        <h1 class="font_capital font__step-3 fw__300 text__primary">Services</h1>
        <SvgsSmallCircleDeco />
        <p class="text__w-40 text__centered text__primary-dark">
          Experience luxury at EllGlow, where we exclusively utilize high-end products in
          all our treatments. Love the products used during your visit? You can take some
          home with you as they are available for purchase at our salon. Secure your
          preferred time by booking in advance. Treat yourself to the best!
        </p>
        <a
          :href="`${details.bookingServiceURL}`"
          target="_blank"
          class="btn btn_square btn_bg"
          >Book now</a
        >
      </div>
    </div>
    <ElementsDividerScrollTitle title="Services" :color="1" :ready="ready" />
    <div class="container">
      <div class="services_container">
        <ElementsServiceBlock
          v-for="service in services"
          :key="service.id"
          :service="service"
          :bookingLink="dataSet.details.bookingServiceURL"
          serviceBlock="main"
        />
      </div>
      <ElementsProductBlock :content="product" />
    </div>
    <ElementsDividerScrollTitle title="AddOn" :color="2" :ready="ready" />
    <div class="container">
      <div class="services_container">
        <ElementsServiceBlock
          v-for="(addon, ind) in addons"
          :key="addon.id"
          :service="addon"
          serviceBlock="addon"
        />
      </div>
    </div>
    <ElementsDividerScrollTitle title="Other" :color="3" :ready="ready" />
    <div class="container">
      <div class="services_container">
        <ElementsServiceBlock
          v-for="(other, ind) in other"
          :key="other.id"
          :service="other"
          serviceBlock="other"
        />
      </div>
    </div>
    <button class="btn-up shadow_md" @click="toTop" v-if="btnTopShow">to top</button>
  </main>
</template>

<script setup>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  definePageMeta({
    pageTransition: transitionConfig,
  })

  const props = defineProps({
    dataSet: Object,
  })

  const { transitionState } = useTransitionComposable()
  const ready = ref(false)
  const product = props.dataSet.products.find(p => p.id === 'product-02')
  const services = props.dataSet.servicesPage.main
  const addons = props.dataSet.servicesPage.addons
  const other = props.dataSet.servicesPage.other
  const details = props.dataSet.details
  const btnTopShow = ref(false)
  const main = ref(null)
  let ctx

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  const showToTopBtn = () => {
    btnTopShow.value = window.scrollY > 900
  }
  watch(
    () => transitionState.transitionComplete,
    newVal => {
      if (newVal) {
        ready.value = true
        ctx = gsap.context(self => {
          const blocks = self.selector('.service_block')
          blocks.forEach(block => {
            gsap.fromTo(
              block,
              {
                yPercent: 20,
              },
              {
                yPercent: 0,
                scrollTrigger: {
                  trigger: block,
                  start: 'top bottom',
                  end: 'top 20%',
                  scrub: true,
                },
              }
            )
          })
        }, main.value)
      }
    }
  )
  onMounted(() => {
    window.addEventListener('scroll', showToTopBtn)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', showToTopBtn)
    ctx.revert()
  })
</script>
