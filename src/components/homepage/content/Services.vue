<script setup lang="ts">
import ServicesCard from "./ServicesCard.vue";
const services = [
  {
    title: "Frontend Development",
    text: "Creating webpage with beautiful user interface, implementing seamless user experience, integrating your API from backends, optimizing your website performance, and many more.",
    url: "#",
  }, {
    title: 'React and Vue',
    text: 'Experienced in common frontend framework and library such as React and Vue. Of course that also comes with various related library you may require such as redux or pinia.',
    url: '#'
  }, {
    title: 'Flexibility',
    text: 'Being a developer in multiple companies and projects means I\'ve seen it all. Working in traditional office as well as working remotely with international teams from another timezone.',
    url: '#'
  }
];
</script>

<template>
  <div>
    <h2>My expertise</h2>
    <div class="service-card-container">
      <ServicesCard
        v-for="(service, index) in services"
        :title="service.title"
        :text="service.text"
        :url="service.url"
        :key="index"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
}

.service-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
