<template>
  <section id="services" class="services">
    <div class="services__background"></div>
    <div class="container">
      <h2 class="services__title">
        Услуги и покрытия
      </h2>

      <div class="services__grid">
        <div
            v-for="service in services"
            :key="service.id"
            class="services__card"
        >
          <h3 class="services__card-title">
            {{ service.title }}
          </h3>
          <div class="services__card-description">
            {{ service.description }}
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
  const services = [
  {
    id: 'epoxy',
    title: 'Эпоксидные полы',
    description: 'Гладкие, химически стойкие покрытия для лабораторий и производств',
  },
  {
    id: 'polyurethane',
    title: 'Полиуретановые полы',
    description: 'Эластичные, устойчивые к перепадам температур (морозильные склады)',
  },
  {
    id: 'topping',
    title: 'Топпинг',
    description: 'Упрочнение бетона металлизированным или кварцевым наполнителем',
  },
  {
    id: 'grinding',
    title: 'Шлифовка и пропитка',
    description: 'Упрочнение верхнего слоя бетона, удаление пыли',
  },
  {
    id: 'markup',
    title: 'Мозаичные полы (терраццо)',
    description: 'Декоративные полы на основе цементного или полимерного состава с добавлением мраморной и гранитной крошки',
  },
  {
    id: 'repair',
    title: 'Ремонт основания',
    description: 'Заделка трещин, сколов и деформационных швов перед заливкой',
  },
];
</script>

<style lang="scss" scoped>
  .services {
    position: relative;
    padding: $space-96 0;

    &__background {
      background-color: $color-bg-dark-section;
      width: 100%;
      @include absolute-cover;
      z-index: -1;
    }

    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: $space-16;
    }

    &__grid {
      @include grid-auto-fit
    }

    &__card {
      background-color: $color-bg-light-dark;
      padding: $space-24;
      min-height: 140px;
      border: 1px solid $color-border;
      border-radius: $radius-card;
      @include transition();

      &:hover {
        transform: translateY(-5px);
        background-color: $color-gray;
      }
    }

    &__card-icon {
      color: $color-accent;
    }

    &__card-title {
      margin-bottom: $space-12;
    }
  }
</style>