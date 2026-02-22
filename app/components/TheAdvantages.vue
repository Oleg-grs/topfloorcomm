<template>
  <section id="advantages" class="advantages">
    <div class="container">
      <h2 class="advantages__title">Почему выбирают нас</h2>
      <ul class="advantages__about">
        <li class="advantages__about-item">Устраиваем промышленные полы под ключ: от подготовки основания и шлифовки до финишного покрытия.</li>
        <li class="advantages__about-item">Анализируем нагрузки, химию и условия эксплуатации, подбираем оптимальную технологию под ваш бюджет.</li>
        <li class="advantages__about-item">Работаем с объектами любого масштаба — от гаражей и квартир до крупных складов и производственных цехов.</li>
      </ul>
      <div class="advantages__grid">
        <div
             v-for="(advantage) in advantages"
             :key="advantage.id"
             class="advantages__card"
        >
          <div class="advantages__card-icon" v-html="advantage.icon"></div>
          <h3 class="advantages__card-title">
            {{ advantage.title }}
          </h3>
          <div class="advantages__card-description">
            {{ advantage.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const advantages = [
  {
    id: 'selection',
    icon: '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>',
    title: 'Подбор под нагрузки',
    description: 'Анализируем эксплуатацию: движение погрузчиков, ударные нагрузки'
  },
  {
    id: 'mastery',
    icon: '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>',
    title: 'Опытная команда',
    description: 'Профессионалы с опытом более 10 лет',
  },
  {
    id: 'quality',
    icon: '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>️',
    title: 'Высокое качество',
    description: 'Используем только проверенные материалы высшего качества',
  },
  {
    id: 'price',
    icon: '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    title: 'Справедливые цены',
    description: 'Прозрачное ценообразование без скрытых платежей',
  },
  {
    id: 'warranty',
    icon: '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    title: 'Гарантия на работы',
    description: 'Официальная гарантия до 5 лет на весь комплекс выполненных работ',
  },
  {
    id: 'support',
    icon: '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    title: 'Выезд специалиста',
    description: 'Бесплатный выезд специалиста на объект в Ижевске и области',
  },
];
</script>

<style lang="scss" scoped>
  .advantages {
    padding: $space-96 0;

    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: $space-16;

      @media (max-width: $breakpoint-sm) {
        text-align: center;
      }
    }

    &__about {
      display: flex;
      flex-direction: column;
      gap: $space-12;
      max-width: 70%;
      font-size: $font-size-lg;
      line-height: $line-height-normal;
      color: $color-text-muted;
      margin-bottom: $space-40;

      @media (max-width: $breakpoint-md) {
        max-width: 100%;
      }
    }

    &__grid {
      @include grid-auto-fit
    }

    &__card {
      background-color: $color-bg-card;
      padding: $space-24;
      min-height: 180px;
      border: 1px solid $color-border;
      border-radius: $radius-card;
      @include transition(border-color, $transition-base);

      &:hover {
        border-color: $color-accent;
      }
    }

    &__card-icon {
      color: $color-accent;
      margin-bottom: $space-16;
    }

    &__card-title {
      margin-bottom: $space-12;
    }
  }
</style>