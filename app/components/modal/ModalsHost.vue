<template>
  <!-- Модалка "Оставить заявку" -->
  <ModalBase
      v-model="isLeadOpen"
      @close="closeModal"
  >
    <LeadModalContent />
  </ModalBase>

  <!-- Модалка "Спасибо" -->
  <ModalBase
      v-model="isThanksOpen"
      @close="closeModal"
  >
    <ThanksModalContent />
  </ModalBase>

  <!-- Модалка "Согласия" -->
  <ModalBase
      v-model="isAgreementOpen"
      @close="closeModal"
  >
    <AgreementModalContent />
  </ModalBase>
</template>

<script setup>
import { computed } from 'vue'
import { useModal } from '@/composables/useModal'
import ModalBase from '@/components/modal/ModalBase.vue'
import LeadModalContent from '@/components/modal/LeadModalContent.vue'
import ThanksModalContent from '@/components/modal/ThanksModalContent.vue'
import AgreementModalContent from "~/components/modal/AgreementModalContent.vue";

const { modalType, closeModal } = useModal()

const isLeadOpen = computed({
  get: () => modalType.value === 'lead',
  set: (val) => { if (!val && modalType.value === 'lead') closeModal() },
})

const isThanksOpen = computed({
  get: () => modalType.value === 'thanks',
  set: (val) => { if (!val && modalType.value === 'thanks') closeModal() },
})

const isAgreementOpen = computed({
  get: () => modalType.value === 'agreement',
  set: (val) => { if (!val && modalType.value === 'Agreement') closeModal() },
})
</script>
