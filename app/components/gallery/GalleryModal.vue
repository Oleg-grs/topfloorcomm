<template>
  <ModalBase
      v-model="isOpen"
      :close-on-esc="true"
      :close-on-overlay="true"
      @close="handleBaseClose"
  >
    <div class="gallery-modal">
      <div class="gallery-modal__header">
        <h3>{{ images.title }}</h3>
      </div>

      <div class="gallery-modal__main">
        <Transition :name="imageTransition" mode="out-in">
          <div
              :key="currentImage"
              class="gallery-modal__image-container"
          >
            <NuxtImg
                :src="allImages[currentImage]"
                :alt="`Услуга по устройству ${images.title}`"
                @load="onImageLoad"
            />
          </div>
        </Transition>

        <div class="gallery-modal__nav-wrapper">
          <div class="gallery-modal__nav-overlay" @click="prevImage">
            <button
                class="gallery-modal__nav gallery-modal__nav--prev"
                :disabled="!hasPrev"
                aria-label="Предыдущее изображение"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9209 1.50495C17.9206 1.90264 17.7623 2.28392 17.4809 2.56495L9.80895 10.237C9.57673 10.4691 9.39252 10.7447 9.26684 11.0481C9.14117 11.3515 9.07648 11.6766 9.07648 12.005C9.07648 12.3333 9.14117 12.6585 9.26684 12.9618C9.39252 13.2652 9.57673 13.5408 9.80895 13.773L17.4709 21.435C17.7442 21.7179 17.8954 22.0968 17.892 22.4901C17.8885 22.8834 17.7308 23.2596 17.4527 23.5377C17.1746 23.8158 16.7983 23.9735 16.405 23.977C16.0118 23.9804 15.6329 23.8292 15.3499 23.556L7.68795 15.9C6.65771 14.8677 6.0791 13.4689 6.0791 12.0105C6.0791 10.552 6.65771 9.15322 7.68795 8.12095L15.3599 0.443953C15.5697 0.234037 15.8371 0.0910666 16.1281 0.0331324C16.4192 -0.0248017 16.7209 0.00490445 16.9951 0.118492C17.2692 0.232079 17.5036 0.424443 17.6684 0.671242C17.8332 0.918041 17.9211 1.20818 17.9209 1.50495Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div class="gallery-modal__nav-overlay" @click="nextImage">
            <button
                class="gallery-modal__nav gallery-modal__nav--next"
                :disabled="!hasNext"
                aria-label="Следующее изображение"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07904 22.5C6.07939 22.1023 6.23766 21.7211 6.51904 21.44L14.191 13.768C14.4233 13.5359 14.6075 13.2602 14.7331 12.9569C14.8588 12.6535 14.9235 12.3284 14.9235 12C14.9235 11.6717 14.8588 11.3465 14.7331 11.0432C14.6075 10.7398 14.4233 10.4642 14.191 10.232L6.52904 2.56502C6.2558 2.28211 6.10461 1.90321 6.10803 1.50992C6.11145 1.11662 6.2692 0.740401 6.54731 0.462289C6.82542 0.184177 7.20164 0.0264236 7.59494 0.0230059C7.98823 0.0195883 8.36714 0.17078 8.65004 0.444017L16.312 8.10502C17.3423 9.13728 17.9209 10.5361 17.9209 11.9945C17.9209 13.4529 17.3423 14.8518 16.312 15.884L8.64004 23.556C8.43056 23.7656 8.16368 23.9085 7.87309 23.9666C7.58249 24.0247 7.2812 23.9954 7.00723 23.8824C6.73326 23.7695 6.49889 23.5779 6.3337 23.3319C6.16851 23.0858 6.07989 22.7964 6.07904 22.5Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="gallery-modal__thumbs">
        <button
            class="gallery-modal__thumbs-btn gallery-modal__thumbs-btn--prev"
            type="button"
            aria-label="Прокрутить миниатюры влево"
            @click="scrollThumbs(-1)"
        >
          ‹
        </button>

        <div class="gallery-modal__miniature" ref="thumbsRef">
          <button
              v-for="(item, index) in allImages"
              :key="index"
              type="button"
              :class="['gallery-modal__miniature-item', { active: currentImage === index }]"
              @click="goToImage(index)"
          >
            <NuxtImg
                :src="item"
                :alt="`${images.description}`"
                width="96"
                height="64"
                fit="cover"
                loading="lazy"
                placeholder="blur"
                draggable="false"
            />
          </button>
        </div>

        <button
            class="gallery-modal__thumbs-btn gallery-modal__thumbs-btn--next"
            type="button"
            aria-label="Прокрутить миниатюры вправо"
            @click="scrollThumbs(1)"
        >
          ›
        </button>
      </div>

    </div>
  </ModalBase>
</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  import ModalBase from '~/components/modal/ModalBase.vue'

  const props = defineProps({
    images: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['update:modelValue', 'close', 'opened', 'closed'])

  const isOpen = ref(props.modelValue)
  const currentImage = ref(0)
  const imageTransition = ref('slide-next')
  const isLoading = ref(true)
  const thumbsRef = ref(null)

  const allImages = computed(() => [props.images.image, ...props.images.images])
  const hasNext = computed(() => currentImage.value < allImages.value.length - 1)
  const hasPrev = computed(() => currentImage.value > 0)

  watch(
      () => props.modelValue,
      (val) => {
        isOpen.value = val
        if (val) {
          emit('opened')
          currentImage.value = 0
        }
      }
  )

  watch(isOpen, (val) => {
    emit('update:modelValue', val)
    if (!val) {
      emit('closed')
    }
  })

  const closeModal = () => {
    isOpen.value = false
  }

  const handleBaseClose = () => {
    closeModal()
    emit('close')
  }

  const nextImage = () => {
    if (hasNext.value) {
      imageTransition.value = 'slide-next'
      currentImage.value++
    }
  }

  const prevImage = () => {
    if (hasPrev.value) {
      imageTransition.value = 'slide-prev'
      currentImage.value--
    }
  }

  const goToImage = (index) => {
    imageTransition.value = index > currentImage.value ? 'slide-next' : 'slide-prev'
    currentImage.value = index
  }

  const onImageLoad = () => {
    isLoading.value = false
  }

  const scrollThumbs = (direction) => {
    const el = thumbsRef.value
    if (!el) return

    // на ~3 миниатюры за шаг
    const step = 3 * (80 + 12) // width + gap
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }
</script>


<style lang="scss" scoped>
  .slide-next-enter-active,
  .slide-prev-enter-active {
    @include transition;
  }

  .slide-next-enter-from {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-next-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-prev-enter-from {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-prev-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }

  /* Основные стили */
  .gallery-modal {
    position: relative;
    z-index: 1001;
    width: 90vw;
    max-width: 1000px;
    max-height: 90vh;
    background-color: #0f1216;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 24px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);

    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(4px);
      cursor: pointer;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__close {
      background: none;
      border: none;
      color: $color-text-main;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    &__main {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
    }

    &__image-container {
      max-width: 100%;
      max-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 50vh;
        object-fit: contain;
        border-radius: 8px;
      }
    }

    &__nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      @include transition;
      color: white;

      &:hover:not(:disabled) {
        transform: translateY(-50%) scale(1.1);
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      &--prev {
        left: $space-16;
      }

      &--next {
        right: $space-16;
      }
    }

    &__nav-wrapper {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
    }

    &__nav-overlay {
      width: 50%;
      height: 100%;
    }

    &__thumbs {
      position: relative;
    }

    &__thumbs-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      padding: $space-32 $space-8;

      &--prev {
        left: -$space-24;
      }

      &--next {
        right: -$space-24;
      }
    }

    &__miniature {
      display: flex;
      gap: 12px;
      padding: 16px;
      overflow-x: auto;
      background: #1a1d23;
      border-radius: 12px;
      scrollbar-width: none;
      cursor: grab;

      @media (max-width: $breakpoint-sm) {

      }

      &::-webkit-scrollbar {
        display: none;
      }

      &-item {
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        border-radius: $space-8;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid transparent;
        @include transition;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &.active {
          border-color: $color-accent;
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  /* Убираем выделение везде */
  .gallery-modal,
  .gallery-modal * {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    outline: none;
  }
</style>
