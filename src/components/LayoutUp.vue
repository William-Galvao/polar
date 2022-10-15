<script setup>
import Footer from './Footer.vue';
const props = defineProps({
  image: String,
  title: String,
});
</script>

<template>
  <div class="flex justify-center my-8 border-b-2 mx-8 py-4">
    <h1 class="text-4xl font-semibold">{{ title }}</h1>
  </div>
  <div class="my-14">
    <img class="animate__animated animate__fadeIn lg:w-5/12 mx-auto rounded-lg" :src="image"
      alt="Placa de boas vindas" />
  </div>

  <section class="
      animate__animated animate__fadeInUp
      mx-8
      lg:mx-80
      grid
      gap-10
      text-sm text-justify
      lg:text-xl lg:text-justify
      font-display font-semibold
      indent-16
      lg:pr-6
      lg:border-r-2 lg:pr-8
    ">
    <slot></slot>
  </section>
  <Footer />
</template>