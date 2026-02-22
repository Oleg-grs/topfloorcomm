<template>
  <div class="thanks">
    <h3 class="thanks__title">Спасибо за заявку!</h3>
    <p class="thanks__text">
      Мы свяжемся с вами в ближайшее время, чтобы уточнить детали и сделать точный расчёт.
    </p>
    <button
        type="button"
        class="btn__close"
        @click="handleClose"
    >
      Закрыть
    </button>
  </div>
</template>

<script setup>
import { useModal } from '@/composables/useModal'

const { closeModal } = useModal()

const handleClose = () => {
  closeModal()
}
</script>

<style scoped lang="scss">
.thanks {
  text-align: center;
  background-color: $color-bg-card;
  border-radius: 25px;
  padding: 60px;
  border: 1px solid $color-border;
  max-width: 600px;

  &__title {
    font-size: $font-size-2xl;
    margin-bottom: $space-16;
  }

  &__text {
    margin-bottom: $space-24;
    color: $color-text-soft;
  }
}

.btn__close {
  padding: $space-16;
  cursor: pointer;
  border-radius: $radius-btn;
  background-color: $color-accent;
  @include hover-btn
}
</style>