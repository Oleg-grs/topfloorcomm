<template>
  <div>
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>

    <ModalsHost/>
  </div>
</template>


<script setup>
  import AppHeader from '@/components/header/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import ModalsHost from '@/components/modal/ModalsHost.vue'

  const siteName = 'ГорТопСтрой — промышленные полы в Ижевске'

  useHead({
    titleTemplate: (titleChunk) =>
        titleChunk ? `${titleChunk} — ${siteName}` : siteName
  })

  useSeoMeta({
    applicationName: siteName,
    ogSiteName: siteName,
    twitterCard: 'summary_large_image'
  })
</script>