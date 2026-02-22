<template>
  <teleport to="body">
    <Transition name="overlay-fade">
      <div
          v-if="modelValue"
          class="modal"
      >

          <div
              class="modal__overlay"
              @click.self="handleClose"
          >
            <button
                class="modal__close"
                type="button"
                aria-label="Закрыть модальное окно"
                @click="handleClose"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>


        <div class="modal__content">
          <slot />
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  import { useScrollLock } from '@/composables/useScrollLock'

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
    closeOnEsc: {
      type: Boolean,
      default: true,
    },
    closeOnOverlay: {
      type: Boolean,
      default: true,
    },
  })

  const emit = defineEmits(['update:modelValue', 'close'])

  const { lockScroll, unlockScroll } = useScrollLock()

  const handleClose = () => {
    emit('update:modelValue', false)
    emit('close')
  }

  const handleKeydown = (event) => {
    if (!props.modelValue) return
    if (!props.closeOnEsc) return
    if (event.key === 'Escape') handleClose()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
    if (props.modelValue) lockScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
    unlockScroll()
  })

  watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          lockScroll()
        } else {
          unlockScroll()
        }
      }
  )
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    &__overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(4px);
    }

    &__content {
      z-index: 1001;
      max-width: 85vw;
      max-height: 90vh;
      border-radius: 16px;
      align-items: center;
      display: flex;
      justify-content: center;
    }

    &__close {
      position: absolute;
      top: 30px;
      right: 30px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  /* простая анимация */
  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    @include transition;
  }

  .overlay-fade-enter-from,
  .overlay-fade-leave-to {
    opacity: 0;
  }
</style>
