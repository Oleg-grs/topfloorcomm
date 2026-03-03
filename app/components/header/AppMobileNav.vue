<template>
  <nav class="mobile-nav">
    <div class="container">
      <ul class="mobile-nav__list">
        <li v-for="item in items" :key="item.hash" class="mobile-nav__item">
          <NuxtLink
              :to="{ path: item.path, hash: item.hash }"
              class="header__nav-link"
              @click="handleNavClick"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <a class="mobile-nav__phone" :href="PHONE_NUMBER_LINK"> {{ PHONE_NUMBER }} </a>
    </div>
  </nav>
</template>

<script setup>
  import { useBurgerMenu } from '~/composables/useBurgerMenu.js'

  const { close } = useBurgerMenu()

  let props = defineProps({
    items: Array,
  })

  function handleNavClick() {
    close()
  }
</script>

<style lang="scss" scoped>
  .mobile-nav {
    display: flex;
    position: fixed;
    top: $header-h;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $color-bg-header;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    &__list {
      display: flex;
      flex-direction: column;
      gap: $space-24;
      padding: $space-40 0;
    }
  }

</style>
