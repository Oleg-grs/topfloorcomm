<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="portfolio__header">
        <h2 class="portfolio__title">Примеры наших работ</h2>
        <p class="portfolio__description">
          Более 150 успешно выполненных проектов
        </p>
      </div>

      <div class="portfolio__grid">
        <div
            v-for="item in portfolioItems"
            :key="item.id"
            class="portfolio__card"
            @click="openGallery(item)"
        >
          <img class="portfolio__card-image" :src="item.image" :alt="item.title">
          <div class="portfolio__card-content">
            <h3 class="portfolio__card-title">{{ item.title }}</h3>
            <div class="portfolio__card-cta">Смотреть галерею →</div>
          </div>
        </div>
      </div>

      <GalleryModal
          v-if="selectedItem"
          v-model="isGalleryOpen"
          :images="selectedItem"
          @close="handleGalleryClose"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'
import GalleryModal from "./gallery/GalleryModal.vue"

const { portfolioItems } = usePortfolio()

const selectedItem = ref(null)
const isGalleryOpen = ref(false)

const openGallery = (item) => {
  selectedItem.value = item
  isGalleryOpen.value = true
}

const handleGalleryClose = () => {
  isGalleryOpen.value = false
  selectedItem.value = null
}
</script>

<style lang="scss" scoped>
.portfolio {
  padding: $space-96 0;
  position: relative;

  &__header {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: $space-24;
    padding-bottom: $space-40;
  }

  &__grid {
    @include grid-auto-fit;
  }

  &__card {
    background-color: $color-bg-card;
    border: 1px solid $color-border;
    border-radius: $radius-card;
    overflow: hidden;
    cursor: pointer;
  }

  &__card-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.3s ease;

    .portfolio__card:hover & {
      transform: scale(1.05);
    }
  }

  &__card-content {
    padding: $space-24;
    display: flex;
    flex-direction: column;
    gap: $space-16;
  }

  &__card-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $color-text-main;
    margin: 0;
  }

  &__card-cta {
    color: $color-accent;
    font-weight: 500;
    transition: transform 0.3s ease;
  }
}

// Адаптивность
@media (max-width: 768px) {
  .portfolio {
    padding: $space-64 0;

    &__grid {
      grid-template-columns: 1fr;
      gap: $space-24;
    }

    &__card-image {
      height: 200px;
    }
  }
}
</style>
