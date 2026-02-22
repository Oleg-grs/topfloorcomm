<template>
  <button
      class="burger"
      :class="{ 'burger--active': isOpen }"
      :aria-expanded="isOpen"
      aria-label="Меню"
      @click="handleClick"
  >
    <span class="burger__line" />
  </button>
</template>

<script setup>
  import { useBurgerMenu } from '@/composables/useBurgerMenu.js'

  const { isOpen, toggle } = useBurgerMenu()

  const handleClick = () => {
    toggle()
  }
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  display: none;
  height: 22px;
  width: 30px;
  align-items: center;

  @media (max-width: $breakpoint-xl) {
    display: flex;
  }

  &__line,
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: currentColor;
    will-change: transform, opacity;
    transform-origin: center;
    @include transition;
  }

  &::before {
    transform: translateY(-9px);
  }

  &__line   {
    transform: translateY(0);
  }

  &::after  {
    transform: translateY(9px);
  }

  &--active {
    &::before {
      transform: translateY(0) rotate(45deg);
    }
    &::after {
      transform: translateY(0) rotate(-45deg);
    }
    .burger__line {
      opacity: 0;
      transform: scale(0);
    }
  }
}

</style>
