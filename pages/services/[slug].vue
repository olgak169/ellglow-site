<template>
  <main>
    <div class="hero">
      <BgsBgPattern43001 />
      <div class="hero_services flex-column shadow_md">
        <h1 class="font_capital font__step-3 fw__300 text__primary text__centered">
          {{ service.name }}
        </h1>
        <SvgsSmallCircleDeco />

        <a
          target="_blank"
          :href="`${details.bookingServiceURL}`"
          class="btn btn_square btn_bg"
          >Book now</a
        >
      </div>
    </div>
    <ElementsDividerScrollTitle title="Face" :color="2" :ready="ready" />

    <div class="container">
      <div class="service_single_container flow text__w-50 minline__auto mblock__xl">
        <p>Process: {{ service?.process[0] }}</p>
        <img
          class="img_rounded"
          :src="`/img/services/${service.img[0]}`"
          :alt="`${service.name} illustration`"
        />
        <ul>
          <li v-for="(benefit, ind) in service.benefits" :key="ind">{{ benefit }}</li>
        </ul>
        <p>{{ service.description }}</p>
        <article>{{ service?.moreInfo[0] }}</article>

        <div class="details-add-info flow">
          <p>
            Price:
            <span v-for="(item, ind) in service.price" :key="ind"> ${{ item }} </span>
          </p>
          <p>
            Duration:
            <span v-for="(item, ind) in service.duration" :key="ind">{{ item }}min </span>
          </p>
          <h3 v-if="service.packageInfo.length">
            Packages available:
            <p v-for="(item, ind) in service.packageInfo" :key="ind">{{ item }}</p>
          </h3>
        </div>

        <NuxtLink to="/services" class="btn btn_square mblock__xl btn_bg"
          >Back to services</NuxtLink
        >
      </div>
      <ElementsProductBlock :content="product" />
    </div>
  </main>
</template>

<script setup>
  const details = inject('contactDetails')
  const services = inject('mainService')
  const products = inject('products')
  const route = useRoute()

  const product = products[2]
  const service = services.find(service => service.slug === route.params.slug)
  const { transitionState } = useTransitionComposable()
  const ready = ref(false)

  definePageMeta({
    pageTransition: transitionConfig,
  })
  watch(
    () => transitionState.transitionComplete,
    newVal => {
      if (newVal) {
        ready.value = true
      }
    }
  )
</script>
