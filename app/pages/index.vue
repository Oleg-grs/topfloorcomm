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

  const url = 'https://gortopstroy.ru/'
  const ogImage = 'https://gortopstroy.ru/og-image.jpg'

  useSeoMeta({
    title: 'Промышленные бетонные и полимерные полы под ключ в Ижевске и по России',
    description: 'Устройство промышленных бетонных и полимерных полов под ключ в Ижевске и по России: гаражи, квартиры, коммерческие и производственные помещения. Расчёт стоимости и гарантия.',
    ogTitle: 'Промышленные бетонные полы в Ижевске и по России — ГорТопСтрой',
    ogDescription: 'Промышленные бетонные и полимерные полы, мозаичные и терраццо, химически стойкие покрытия. Более 150 объектов. Рассчитаем стоимость под ваш объект.',
    ogImage,
    ogUrl: url,
    robots: 'index, follow'
  })
</script>