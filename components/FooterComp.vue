<template>
  <footer :class="{ hidden: $route.path === '/contact' }" class="bg_accent_light">
    <div class="footer_container">
      <span class="font_display text__centered text__primary-dark"
        >Come visit us soon!</span
      >
      <div class="footer_content pblock__l">
        <div class="footer_info">
          <h5 class="font_capital font__step-2 fw__300 text__primary">EllGlow</h5>
          <p>Address: {{ details.address }}</p>
        </div>
        <div class="nav-btns">
          <a :href="`tel:${details.phoneNumber}`" class="nav-btn_link btn_primary">Call now</a>
          <a :href="`https://wa.me/${details.whatsAppNumber}`" class="nav-btn_link btn_white">WhatsApp</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import data from 'assets/data/data.json'
  const details = data.details
</script>

<style lang="scss" scoped></style>
