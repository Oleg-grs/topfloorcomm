<template>
  <section id="hero" class="hero">
    <div class="hero__bg"></div>
    <div class="hero__overlay"></div>
    <div class="container">
      <div class="hero__inner">
        <div class="hero__grid">
          <div class="hero__content">
            <h1 class="hero__title">Промышленные бетонные полы под ключ в Ижевске и по России</h1>
            <p class="hero__text" >
              Качество и Профессионализм — Наша философия
            </p>

            <div class="hero__actions">
              <AppPrimaryBtn class="hero__actions-btn" type="primary"/>
              <a href="#portfolio" class="hero__link-to">Посмотреть объекты</a>
            </div>

            <div class="hero__badges">
              <span class="hero__badge">от 50 м²</span>
              <span class="hero__badge">Гарантия до 5 лет</span>
              <span class="hero__badge">По договору</span>
              <span class="hero__badge">Большой опыт</span>
              <span class="hero__badge">Качество</span>
            </div>
          </div>
          <FormCard class="hero__form-card"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import FormCard from "@/components/lead_form/FormCard.vue";
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;

    @media (max-width: $breakpoint-xs) {
      align-items: flex-end;
    }

    &__bg {
      background-image: url('/images/hero.webp');
      @include absolute-cover;
      background-size: cover;
      background-position: center;
      z-index: -2;
    }

    &__overlay {
      @include absolute-cover;
      z-index: -1;
      position: absolute;
      inset: 0;
      background-image:
          linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.5) 0%,
                  rgba(0, 0, 0, 0.3) 30%,
                  rgba(0, 0, 0, 0.2) 60%,
                  rgba(0, 0, 0, 0.0) 100%
          ),
          linear-gradient(
                  to left,
                  rgba(0, 0, 0, 0.7) 0%,
                  rgba(0, 0, 0, 0.5) 10%,
                  rgba(0, 0, 0, 0.3) 30%,
                  rgba(0, 0, 0, 0.3) 100%
          );
      @media (max-width: $breakpoint-md) {
        background-image:
            linear-gradient(
                    to top,
                    rgba(0, 0, 0, 0.5) 0%,
                    rgba(0, 0, 0, 0.4) 30%,
                    rgba(0, 0, 0, 0.4) 60%,
                    rgba(0, 0, 0, 0.4) 100%
            ),
            linear-gradient(
                  to left,
                  rgba(0, 0, 0, 0.0) 0%,
                  rgba(0, 0, 0, 0.0) 10%,
                  rgba(0, 0, 0, 0.0) 30%,
                  rgba(0, 0, 0, 0.0) 100%
                  );
      }
    }



    &__grid {
      display: grid;
      grid-template-columns: 7fr 5fr;
      align-items: center;
      gap: $space-24;


      @media (max-width: $breakpoint-lg) {
        display: flex;
        max-width: 80%;
      }

      @media (max-width: $breakpoint-md) {
        max-width: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: $space-24;
      animation: fadeInUp 0.8s ease-out;

      @media (max-width: $breakpoint-xs) {
        padding-bottom: $space-24;
        gap: $space-16;
      }
    }

    &__title {
      font-size: $font-size-5xl;
      line-height: 64px;
      font-weight: $font-weight-bold;
      letter-spacing: -1%;

      @media (max-width: $breakpoint-sm) {
        font-size: $font-size-4xl;
        line-height: $line-height-normal;
      }

      @media (max-width: $breakpoint-xs) {
        font-size: $font-size-3xl;
        line-height: $line-height-normal;
      }
    }

    &__text {
      font-size: $font-size-lg;
      color: $color-text-muted;
      margin-bottom: $space-48;

      @media (max-width: $breakpoint-xs) {
        margin-bottom: $space-24;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: $space-8;
      max-width: 500px;
    }

    &__actions-btn {
      width: 50%;
    }

    &__link-to {
      display: flex;
      width: 50%;
      text-align: center;
      justify-content: center;
      padding: $space-12 $space-16;
      border: 2px solid $color-border;
      border-radius: $radius-btn;
      transition: border-color $transition-base;

      &:hover {
        border-color: $color-accent;
      }
    }


    &__form-card {
      animation: slideInFromRight 0.8s ease-out;

      @media (max-width: $breakpoint-lg) {
        display: none;
      }
    }

    &__badges {
      display: flex;
      flex-wrap: wrap;
      gap: $space-8;

    }

    &__badge {
      padding: 6px 16px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      @include rounded(50px)
    }
  }
</style>