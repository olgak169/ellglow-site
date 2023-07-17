<template>
  <header :class="{ transparent: $route.path === '/' }">
    <div class="header_container">
      <div class="logo_container">
        <NuxtLink to="/" @click.native="closeModal">
          <span class="sr-only">Ell Glow logo. Click to go to home page.</span>
          <SvgsLogoIcon />
        </NuxtLink>
      </div>
      <div class="mobile-btns">
        <button @click="toggleModal">
          <span class="sr-only">{{ menuOpen ? 'Open menu' : 'Close menu' }}</span>
          <SvgsMenuIcon :menuOpen="menuOpen" />
        </button>
      </div>

      <nav :class="{ 'mobile-nav': menuOpen }">
        <ul>
          <li><NuxtLink to="/services" @click.native="closeModal">Services</NuxtLink></li>
          <li><NuxtLink to="/about" @click.native="closeModal">About</NuxtLink></li>
          <li><NuxtLink to="/contact" @click.native="closeModal">Contact</NuxtLink></li>
        </ul>
        <div class="nav-btns">
          <NuxtLink
            :href="`tel:${details.phoneNumber}`"
            class="nav-btn_link btn_primary"
            @click.native="closeModal"
            >Call now
          </NuxtLink>
          <NuxtLink
            :href="`tel:${details.whatsAppNumber}`"
            class="nav-btn_link btn_white"
            @click.native="closeModal"
            >WhatsApp
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import data from 'assets/data/data.json'
  const details = data.details
  const menuOpen = ref(false)

  const toggleModal = () => {
    menuOpen.value = !menuOpen.value
    document.body.classList.toggle('modal')
  }
  const closeModal = () => {
    menuOpen.value = false
    document.body.classList.remove('modal')
  }
</script>
