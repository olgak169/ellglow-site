<template>
  <main>
    <div class="hero hero_home border_b">
      <div class="hero_container">
        <div class="hero_home-content flex-column">
          <h1>
            <span class="font_display">Welcome to</span><br />
            glow
            <span>&</span>
            shine
          </h1>
          <div class="hero_home-text">
            <p v-for="(text, index) in dataSet.homePage.heroText" :key="index">
              {{ text }}
            </p>
          </div>
          <a :href="`${dataSet.details.bookingServiceURL}`" class="hero_home-cta"
            >Book now</a
          >
        </div>
        <ElementsHeroImage :ready="ready" />
      </div>
    </div>
    <div class="container">
      <div class="content">
        <h2 class="home_slogan text__primary-dark">
          <span class="fw__300 font_capital">Investing in yourself</span><br />
          <span class="font_display"> is the best investment </span><br />
          <span class="fw__300 font_capital">you will ever make</span>
        </h2>
        <div class="divider_s background_fill"></div>
      </div>
      <section class="content background_fill-border-b bg_primary_light">
        <div class="promotion_container">
          <div class="promotion_content flex-column">
            <h3 class="text__primary-dark font_serif">
              Our most popular face treatments
            </h3>
            <p>
              Our time tested treatments that our clients absolutely love. Pamper yourself
              with our most popular facial treatments, beloved by our clients for their
              transformative results and blissful relaxation. Whichever treatment you
              choose, you'll experience personalized care and expertise from our skilled
              estheticians, leaving you refreshed, rejuvenated, and glowing with
              confidence.
            </p>
          </div>
          <div class="promotion_card__container">
            <div class="promotion_card shadow_md bg_pattern bg_pattern_square--001">
              <div>
                <h4 class="font_capital fw__500 text__primary">
                  {{ dataSet.servicesPage.main[0].name }}
                </h4>
                <NuxtLink
                  :to="`/services/${dataSet.servicesPage.main[0].slug}`"
                  class="text__primary-dark flex link_arrow"
                  ><span>See more</span>
                  <svg
                    width="25"
                    height="18"
                    viewBox="0 0 25 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.4854 1L23.9706 9L15.4854 17" stroke="#c72462" />
                    <line
                      x1="24"
                      y1="9.04248"
                      x2="4.63629e-08"
                      y2="9.04248"
                      stroke="#c72462"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="promotion_card shadow_md bg_pattern bg_pattern_square--002">
              <div>
                <h4 class="font_capital fw__500 text__primary">
                  {{ dataSet.servicesPage.main[1].name }}
                </h4>
                <NuxtLink
                  :to="`/services/${dataSet.servicesPage.main[1].slug}`"
                  class="text__primary-dark flex link_arrow"
                  ><span>See more</span>
                  <svg
                    width="25"
                    height="18"
                    viewBox="0 0 25 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.4854 1L23.9706 9L15.4854 17" stroke="#c72462" />
                    <line
                      x1="24"
                      y1="9.04248"
                      x2="4.63629e-08"
                      y2="9.04248"
                      stroke="#c72462"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content mblock__xl">
        <h3
          class="font_capital fw__300 font__step-2 text__primary text__w-30 text__centered minline__auto"
        >
          Our clients are always happy to visit us. Here are the reasons:
        </h3>
        <div class="benefit_container">
          <div
            class="card_benefit bg_primary_light flex-column"
            v-for="(benefit, index) in dataSet.homePage.benefits"
            :key="index"
          >
            <h4 class="font__step-1 font_serif text__primary-dark">
              {{ benefit.title }}
            </h4>
            <SvgsSmallCircleDeco />
            <div>
              <p class="text__w-40">{{ benefit.text }}</p>
            </div>
            <SvgsSmallCircleDeco />
          </div>
        </div>
      </section>

      <ElementsProductBlock :content="product" />
      <div class="background_fill-border-b"></div>
      <section class="content mt__3xl">
        <h3 class="font_serif font__step-2 text__primary-dark">Our clients about us:</h3>
        <div class="background_fill bg_primary_light">
          <div class="reviews_container">
            <div
              class="review flow shadow_md"
              v-for="review in dataSet.homePage.reviews"
              :key="review.id"
            >
              <SvgsSmallCircleDeco class="minline__auto" />
              <div class="flex-column">
                <p class="text__w-40">{{ review.text }}</p>
                <p>~ {{ review.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
  definePageMeta({
    pageTransition: transitionConfig,
  })
  const props = defineProps({
    dataSet: Object,
  })
  const { transitionState } = useTransitionComposable()
  const product = props.dataSet.products.find(p => p.id === 'product-01')
  const ready = ref(false)
  watch(
    () => transitionState.transitionComplete,
    newVal => {
      if (newVal) {
        ready.value = true
      }
    }
  )
</script>
