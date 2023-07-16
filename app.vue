<template>
  <HeaderComp />
  <NuxtLayout>
    <NuxtPage :dataSet="data" />
  </NuxtLayout>
  <FooterComp />
</template>

<script setup>
  import data from 'assets/data/data.json'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
  import { useTransitionComposable } from './composables/transition'

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const { toggleTransitionComplete } = useTransitionComposable()
  definePageMeta({
    pageTransition: transitionConfig,
  })
  onMounted(() => {
    toggleTransitionComplete(true)
  })
  provide('products', data.products)
  provide('contactDetails', data.details)
  provide('mainService', data.servicesPage.main)

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
  })
  useSeoMeta({
    title: 'EllGlow Studio',
    ogTitle: 'EllGlow Studio',
    description:
      'Discover the ultimate in beauty and self-care at EllGlow in Orange County. Indulge in luxurious facial treatments, professional hair services, and an array of beauty offerings. Experience the transformative power of our personalized services, designed to enhance your natural radiance. Uncover a world of beauty and rejuvenation with EllGlow. Book your appointment today.',
    ogDescription:
      'Discover the ultimate in beauty and self-care at EllGlow in Orange County. Indulge in luxurious facial treatments, professional hair services, and an array of beauty offerings. Experience the transformative power of our personalized services, designed to enhance your natural radiance. Uncover a world of beauty and rejuvenation with EllGlow. Book your appointment today.',
  })
</script>
