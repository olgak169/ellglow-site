<template>
  <div class="service_block">
    <div class="service_img" :class="{ light: service.background === 'light' }">
      <nuxt-img :src="imgSrc" :alt="` Illustration of ${service.name}`" loading="lazy" />
    </div>
    <article
      :class="{ 'service_description-other': serviceBlock === 'other' }"
      class="service_description main_block flow"
      v-if="serviceBlock === 'main' || serviceBlock === 'other'"
    >
      <h3 class="fw__300 font__step-2 font_serif">{{ service.name }}</h3>
      <p class="text__w-50">
        {{ service.description }}
      </p>
      <h4 class="font_capital fw__300 text__underlined">Benefits</h4>
      <ul class="flow text__w-50">
        <li v-for="(name, index) in service.benefits" :key="index">{{ name }}</li>
      </ul>
      <div class="service_details" v-if="serviceBlock === 'main'">
        <div>
          <div class="flex">
            <span v-for="dur in service.duration">~{{ dur }}min</span>
          </div>
          <div class="flex">
            <span v-for="price in service.price">~{{ price }}$</span>
          </div>
        </div>
        <div class="service_links flex mblock__l">
          <NuxtLink
            :to="`/services/${service.slug}`"
            class="btn btn_cta__service btn_info"
            >More info
          </NuxtLink>
          <a
            :href="`${bookingLink}`"
            target="_blank"
            class="btn btn_cta__service btn_book"
            >Book now
          </a>
        </div>
      </div>
    </article>
    <div class="service_description addon_block" v-if="serviceBlock === 'addon'">
      <div class="addon_content flow">
        <h3 class="fw__300 font__step-1 font_serif">{{ service.content[0].name }}</h3>
        <p class="text__w-50">{{ service.content[0].description }}</p>
        <p>~ {{ service.content[0].price }}$</p>
      </div>
      <div class="addon_content flow">
        <h2 class="fw__300 font__step-1 font_serif">{{ service.content[1].name }}</h2>
        <p class="text__w-50">{{ service.content[1].description }}</p>
        <p>~ {{ service.content[1].price }}$</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { gsap } from 'gsap'
  const props = defineProps({
    bookingLink: String,
    service: Object,
    serviceBlock: String,
  })

  const imgSrc = computed(() => {
    const isIdEven = Number(props.service.id.charAt(2)) % 2
    if (props.serviceBlock === 'main' || props.serviceBlock === 'addon') {
      return isIdEven === 0
        ? `/img/services/slogans/${props.service.img[1]}`
        : `/img/services/${props.service.img[0]}`
    } else {
      return `/img/services/${props.service.img[0]}`
    }
  })
</script>
