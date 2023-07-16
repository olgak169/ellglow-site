<template>
  <main>
    <div class="container">
      <div class="contact_container">
        <div class="map_container">
          <iframe width="500" height="400" frameborder="0" src="" scrolling="no">
          </iframe>
        </div>
        <div class="contact-details flow">
          <p class="fw__500 text__primary-dark">
            Address: <span class="text__primary fw__400">{{ details.address }}</span>
          </p>
          <p class="fw__500 text__primary-dark">
            Working hours:
            <span class="text__primary fw__400">Mon-Fri -- 10AM - 6PM</span>
          </p>
          <p class="fw__500 text__primary-dark">
            Phone number:
            <span class="text__primary fw__400">{{ details.phoneNumber }}</span>
          </p>
          <p class="flex fw__500 text__primary-dark">
            Follow us on Instagram:
            <a :href="`${details.instagramLink}`" class="link_arrow">
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
            </a>
          </p>
        </div>
      </div>
      <span class="font_display text__centered text__primary-dark d__block minline__auto"
        >Come visit us soon!</span
      >
    </div>
  </main>
</template>
<script setup>
  const details = inject('contactDetails')
  definePageMeta({
    pageTransition: transitionConfig,
  })
  useHead({
    bodyAttrs: {
      class: 'bg_primary_light',
    },
  })
</script>
