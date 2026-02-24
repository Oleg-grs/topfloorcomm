<template>
  <section class="cta">
    <div class="container">
      <div class="cta__inner">
        <h2 class="cta__title">Готовы рассчитать стоимость?</h2>
        <div class="cta__subtitle">Оставьте заявку прямо сейчас. Мы подберем оптимальное решение под ваш бюджет и тип нагрузок</div>
        <AppPrimaryBtn/>
      </div>
    </div>
  </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
  .cta {
    padding: $space-96 0;
    display: flex;
    flex-direction: column;
    text-align: center;

    &__inner {
      @include flex-center;
      flex-direction: column;
      gap: $space-32;
      padding: $space-80 $space-64;
      background: $color-bg-gradient;
      border-radius: $radius-large;

      @media (max-width: $breakpoint-xs) {
        padding: $space-32 $space-16;
      }
    }

    &__subtitle {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      text-align: center;
    }
  }
</style>