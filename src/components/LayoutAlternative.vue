<script setup>
import Footer from './Footer.vue';
const props = defineProps({
  image: String,
  alt: String,
  title: String,
});
</script>


<template class="lg:grid lg:grid-cols-2 lg:mt-10">
  <div class="flex justify-center my-8 border-b-2 mx-8 py-4">
    <h1 class="text-4xl font-semibold">{{ title }}</h1>
  </div>
  <slot name="text"></slot>

  <div>
    <img class="animate__animated animate__fadeInLeft lg:w-4/12 rounded-lg mx-auto" :src="image" :alt="alt" />
  </div>

  <div>
    <slot></slot>
  </div>
  <Footer />
</template>