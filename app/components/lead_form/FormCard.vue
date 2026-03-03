<template>
  <div class="form-card">
    <h3 class="form-card__title">Узнайте стоимость пола</h3>

    <form @submit.prevent="onSubmit">
      <div class="form-card__group">
        <input
            v-model="form.name"
            type="text"
            class="form-input"
            placeholder="Как к вам обращаться?"
        >
      </div>

      <div class="form-card__group">
        <input
            v-model="form.area"
            type="text"
            class="form-input"
            placeholder="Площадь пола, м²"
        >
      </div>

      <div class="form-card__group">
        <div class="custom-select" @click="toggleService">
          <div class="custom-select__value">
            {{ form.service || 'Выберите вид работ' }}
          </div>
          <div
              class="custom-select__icon"
              :class="{ 'custom-select__icon--active': isServiceOpen }"
          >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="/images/sprite.svg#arrow"/>
            </svg>
          </div>
        </div>

        <Transition name="dropdown-fade">
          <div
              v-if="isServiceOpen"
              class="custom-select__dropdown"
          >
            <button
                v-for="option in services"
                :key="option"
                type="button"
                class="custom-select__option"
                @click.stop="selectService(option)"
            >
              {{ option }}
            </button>
          </div>
        </Transition>
      </div>

      <div class="form-card__group">
        <input
            :value="form.phone"
            type="tel"
            class="form-input"
            placeholder="+7 (___) ___-__-__"
            required
            maxlength="18"
            @input="onPhoneInput"
        >
      </div>

      <button
          type="submit"
          class="btn btn-primary"
          :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Отправляем…' : 'Отправить заявку' }}
      </button>

      <div class="form-card__legal">
        <input
            id="agree"
            v-model="form.agree"
            type="checkbox"
            class="form-card__checkbox"
        >

        <label for="agree">
          Я даю
          <button
              type="button"
              class="form-card__link"
              @click="openAgreement"
          >
            согласие
          </button>
          на обработку персональных данных и соглашаюсь с
          <NuxtLink to="/privacy" class="form-card__link" @click="closeForm">
            политикой конфиденциальности
          </NuxtLink>.
        </label>
      </div>

      <p v-if="error" class="form-card__error" v-html="error">
      </p>
    </form>
  </div>
</template>

<script setup>
  import { useModal } from '~/composables/useModal.js'
  import { usePhoneMask } from '~/composables/usePhoneMask.js'
  import { useLeadForm } from '~/composables/useLeadForm.js'
  import { useFormState } from "~/composables/useFormState.js";

  const { form, services, isServiceOpen, toggleService, selectService, resetForm } = useFormState()
  const { formatPhone, isPhoneValid } = usePhoneMask()
  const { isSubmitting, error, sendLead } = useLeadForm()
  const { openModal, closeModal } = useModal()

  const onPhoneInput = (event) => {
    const formatted = formatPhone(event.target.value)
    form.phone = formatted.slice(0, 18)
  }

  const closeForm = () => {
    closeModal()
  }

  const onSubmit = async () => {
    error.value = ''

    if (!isPhoneValid(form.phone)) {
      error.value = 'Введите корректный номер телефона'
      return
    }

    if (!form.service) {
      error.value = 'Выберите вид работ'
      return
    }

    if (!form.agree) {
      error.value = 'Необходимо согласиться с политикой обработки персональных данных'
      return
    }

    const ok = await sendLead({
      source: 'site',
      name: form.name,
      area: form.area,
      service: form.service,
      phone: form.phone,
    })

    if (!ok) return

    resetForm()
    closeModal()
    openModal('thanks')
  }

  const openAgreement = () => {
    openModal('agreement')
  }
</script>

<style lang="scss" scoped>
  .form-card {
    max-width: 500px;
    background: $color-bg-hero-card;
    backdrop-filter: blur(20px);
    padding: $space-32;
    border-radius: $radius-card;
    border: 1px solid $color-border;
    box-shadow: $shadow-xl;

    @media (max-width: $breakpoint-xs) {
      padding: $space-24;
    }


    &__title {
      font-size: $font-size-3xl;
      margin-bottom: $space-32;
      text-align: center;

      @media (max-width: $breakpoint-xs) {
        font-size: $font-size-xl;
        margin-bottom: $space-24;
      }
    }

    &__group {
      position: relative;
      margin-bottom: $space-16;

      @media (max-width: $breakpoint-xs) {
        margin-bottom: $space-12;
      }
    }

    &__legal {
      font-size: $font-size-xs;
      color: $color-text-soft;
      margin-top: $space-12;
      text-align: center;
    }

    &__link {
      background: none;
      border: none;
      color: $color-accent;
      cursor: pointer;
      padding: 0;
    }

    &__error {
      margin-top: $space-8;
      font-size: $font-size-sm;
      color: $color-error;
      text-align: center;
    }
  }

  .form-input,
  .form-select {
    width: 100%;
    height: $space-48;
    padding: 0 $space-12;
    background: $color-bg-shaded;
    border: 1px solid $color-border;
    border-radius: $radius-btn;
    color: $color-text-main;
    outline: none;

    &:focus {
      border-color: $color-accent;
    }
  }

  .custom-select {
    position: relative;
    width: 100%;
    height: $space-48;
    padding: 0 $space-12;
    background: $color-bg-shaded;
    border: 1px solid $color-border;
    border-radius: $radius-btn;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &__icon {
      @include transition(transform, $transition-base);
    }

    &__icon--active {
      transform: rotate(180deg);
    }

    &__dropdown {
      position: absolute;
      width: 100%;
      margin-top: $space-4;
      background: $color-bg-shaded;
      border-radius: $radius-btn;
      border: 1px solid $color-border;
      max-height: 220px;
      overflow-y: auto;
      z-index: 1010;
      backdrop-filter: blur(10px);
      transform-origin: top center;
    }

    &__option {
      width: 100%;
      text-align: left;
      padding: $space-8 $space-12;
      cursor: pointer;

      &:hover {
        background: $color-border;
      }
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    outline: none;
  }

  .btn {
    background: $color-accent;
    width: 100%;
    border-radius: $radius-btn;
    padding: $space-16;
    @include hover-btn
  }

  .dropdown-fade-enter-active,
  .dropdown-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform-origin: top center;
  }

  .dropdown-fade-enter-from,
  .dropdown-fade-leave-to {
    opacity: 0;
    transform: scaleY(0.85) translateY(-8px);
  }

  .dropdown-fade-enter-to,
  .dropdown-fade-leave-from {
    opacity: 1;
    transform: scaleY(1) translateY(0);
  }
</style>

<style lang="scss">
.form-card__error a {
  color: $color-accent;
}
</style>
