<template>
  <main>
    <HeroBlock />
    <TheAdvantages />
    <TheServices />
    <ThePortfolio />
    <CallToAction />
  </main>
</template>

<script setup>
  import HeroBlock from '@/components/HeroBlock.vue'
  import TheAdvantages from '@/components/TheAdvantages.vue'
  import TheServices from '@/components/TheServices.vue'
  import ThePortfolio from '@/components/ThePortfolio.vue'
  import CallToAction from '@/components/CallToAction.vue'
  import {OG_IMAGE, SITE_URL} from "@/utils/constants.js";

  const url = SITE_URL
  const ogImage = OG_IMAGE

  useSeoMeta({
    title: 'Промышленные бетонные и полимерные полы под ключ в Ижевске и по России',
    description: 'Устройство промышленных бетонных и полимерных полов под ключ в Ижевске и по России: гаражи, квартиры, коммерческие и производственные помещения. Расчёт стоимости и гарантия.',
    ogTitle: 'Промышленные бетонные полы в Ижевске и по России — ГорТопСтрой',
    ogDescription: 'Топинговые бетонные и полимерные полы, мозаичные и терраццо, химически стойкие покрытия в Ижевске и Удмуртии. От гаражей до больших производств. Более 150 объектов. Рассчитаем стоимость под ваш объект.',
    ogImage,
    ogUrl: url,
    robots: 'index, follow',
    yandexVerification: 'f6f1ec12dcd6974f'
  })
</script>