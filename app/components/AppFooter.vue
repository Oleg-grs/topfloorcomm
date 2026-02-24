<template>
  <footer id="footer" class="footer" >
    <div class="container">
      <div class="footer__inner">
        <div>
          <div class="footer__logo">
            <a href="#hero" >
              <img src="/images/logo.png" alt="" class="footer__logo-image" />
            </a>
          </div>
          <div class="footer__subtitle">Устройство промышленных полов в Ижевске и Удмуртии</div>
        </div>
        <div id="contacts" class="footer__info">
          <h4 class="footer__info-title">Контакты</h4>
          <a class="footer__info-tel" href="tel:+79292787853"> +7 (929) 278-78-53 </a>
          <a class="footer__info-mail" href="mailto:alex83gorshkov@yandex.ru">
            alex83gorshkov@yandex.ru
          </a>
          <div class="footer__info-soc1al">
            <a href="https://vk.com/club235911673" target="_blank" rel="noopener" aria-label="Мы ВКонтакте">
              <svg class="soc1al-icon" aria-hidden="true">
                <use href="/images/sprite.svg#icon-vk"/>
              </svg>
            </a>
            <a href="https://telegram.me/toppoly" target="_blank" rel="noopener" aria-label="Мы в телеграм">
              <svg class="soc1al-icon" aria-hidden="true">
                <use href="/images/sprite.svg#icon-tg"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer__address">
          <h4 class="footer__address-title">Адрес</h4>
          <h4 class="footer__address-text">д.Сепыч,<br>ул. Нагорная, д. 4</h4>
        </div>
      </div>
      <div class="footer__legal">
        <div class="footer__copyright">© ГорТопСтрой 2026 </div>
        <NuxtLink to="/privacy" class="footer__legal-link">
          Политикa конфиденциальности
        </NuxtLink>
      </div>
    </div>
  </footer>

</template>

<script setup>

</script>

<style lang="scss" scoped>
  .footer {
    padding: $space-32 0;
    border-top: 1px solid $color-border;

    &__inner {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 40px;
      margin-bottom: $space-24;
    }

    &__logo {
      width: 100px;
    }

    &__subtitle {
      font-size: 10px;
      color: $color-text-muted;
    }
    
    &__info {
      display: flex;
      flex-direction: column;
      gap: $space-12;
    }

    &__info-soc1al {
      display: flex;
      gap: $space-16;
    }

    &__address {
      display: flex;
      flex-direction: column;
      gap: $space-16;
    }

    &__legal {
      display: flex;
      justify-content: space-between;
      font-size: $font-size-xs;
      color: $color-text-muted;
    }

    &__legal-link {
      &:hover {
        color: $color-accent-hover;
      }
    }
  }

  .soc1al-icon {
    width: 24px;
    height: 24px;
    fill: currentColor; /* цвет = color родителя */
    transition: transform .2s;
    a:hover & { transform: scale(1.15); }
  }
</style>