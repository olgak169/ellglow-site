<template>
  <header :class="{ transparent: $route.path === '/' }">
    <div class="header_container">
      <div class="logo_container">
        <NuxtLink to="/">
          <span class="sr-only">Ell Glow logo. Click to go to home page.</span>
          <SvgsLogoIcon />
        </NuxtLink>
      </div>
      <div class="mobile-btns">
        <button @click="openModal">
          <span class="sr-only">{{ menuOpen ? 'Open menu' : 'Close menu' }}</span>
          <SvgsMenuIcon :menuOpen="menuOpen" />
        </button>
      </div>

      <nav :class="{ 'mobile-nav': menuOpen }">
        <ul>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
        <div class="nav-btns">
          <a :href="`tel:${details.phoneNumber}`" class="nav-btn_link btn_primary"
            >Call now</a
          >
          <a :href="`tel:${details.whatsAppNumber}`" class="nav-btn_link btn_white"
            >WhatsApp</a
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import data from 'assets/data/data.json'
  const details = data.details
  const route = useRoute()
  const menuOpen = ref(false)

  const openModal = () => {
    menuOpen.value = !menuOpen.value
    document.body.classList.toggle('modal')
  }

  watch(route, () => {
    menuOpen.value = false
    document.body.classList.remove('modal')
  })
</script>
