<template>
    <header class="header">
      <div class="header__backdrop"></div>
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">
            <a href="#hero" >
              <img src="/images/logo.png" alt="" class="header__logo-image" />
            </a>
          </div>

          <nav class="header__nav">
            <ul class="header__nav-list">
              <li
                  v-for="item in navItems"
                  :key="item.hash"
                  class="header__nav-item">
                <NuxtLink
                    :to="{ path: item.path, hash: item.hash }"
                    class="header__nav-link"
                    replace
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <Transition name="menu-slide">
            <AppMobileNav
                v-if="isOpen"
                :items="navItems"
                @close="close"
            />
          </Transition>

          <div class="header__action">
            <a class="header__phone" :href="PHONE_NUMBER_LINK"> {{ PHONE_NUMBER }} </a>
            <AppPrimaryBtn/>
          </div>
          <AppBurgerBtn/>
        </div>
        </div>
    </header>
</template>

<script setup>
  import { useBurgerMenu } from "@/composables/useBurgerMenu.js";
  import { navItems } from "@/composables/useNav.js";
  import AppPrimaryBtn from "@/components/AppPrimaryBtn.vue";
  import AppMobileNav from "@/components/header/AppMobileNav.vue";

  const { isOpen, close }  = useBurgerMenu();
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 100;
    height: $header-h;
    border-bottom: 1px solid transparent;

    &__backdrop {
      position: fixed;
      height: $header-h;
      width: 100%;
      background-color: $color-bg-header;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: -1;
    }


    &__inner {
      @include flex-between;
      height: 100%;
    }

    &__logo {
      display: flex;
      height: 70px;
      width: 160px;
      transition: opacity $transition-base;

      &:hover {
        opacity: 0.8;
      }
    }

    &__nav {
      display: flex;
      align-items: center;
      gap: $space-32;

      @media (max-width: $breakpoint-xl) {
        display: none;
      }
    }

    &__nav-list {
      display: flex;
      gap: $space-32;
      list-style: none;
    }

    &__nav-link {
      font-weight: $font-weight-medium;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $color-accent;
        @include transition(width, $transition-base);
      }

      &:hover::after {
        width: 100%;
      }
    }

    &__action {
      align-items: center;
      display: flex;
      gap: $space-16;

      @media (max-width: $breakpoint-xl) {
        display: none;
      }
    }

    &__phone {
      font-size: $font-size-base;
      font-weight: $font-weight-semibold;
    }

    .menu-slide-enter-active,
    .menu-slide-leave-active {
      @include transition
    }

    .menu-slide-enter-from,
    .menu-slide-leave-to {
      transform: translateX(-100%);
    }

    .menu-slide-enter-to,
    .menu-slide-leave-from {
      transform: translateX(0);
    }
  }
</style>