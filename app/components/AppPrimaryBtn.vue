<template>
  <button class="button-primary" @click="openForm">
    Получить консультацию
  </button>
</template>

<script setup>
  import { useModal } from "@/composables/useModal.js";

  const { openModal } = useModal()

  const openForm = () => {
    openModal('lead');
  }

</script>

<style lang="scss" scoped>
  .button-primary {
    padding: $space-16;
    background-color: $color-accent;
    border-radius: $radius-btn;
    @include hover-btn;

    &:focus {
      transform: scale(0.96);
    }
  }
</style>