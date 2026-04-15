<template>
  <div id="sierra-app">
    <NavBar />
    <main>
      <HeroSection />
      <PartenairesSection />
      <ServicesSection />
      <StatsSection />
      <SecteursSection />
      <ClientsSection />
      <EngagementsSection />
      <TerrainBanner />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import PartenairesSection from '../components/PartenairesSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import StatsSection from '../components/StatsSection.vue'
import SecteursSection from '../components/SecteursSection.vue'
import ClientsSection from '../components/ClientsSection.vue'
import EngagementsSection from '../components/EngagementsSection.vue'
import TerrainBanner from '../components/TerrainBanner.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
