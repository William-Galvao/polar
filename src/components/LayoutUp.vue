<script setup>

const props= defineProps({
    image: String,
    
    

})

</script>

<template>
    <div class="my-14">
      <img class=" animate__animated animate__fadeIn lg:w-5/12 mx-auto rounded-lg " :src='image'
        alt="Placa de boas vindas">
    </div>
  
    <section
      class=" animate__animated animate__fadeInUp lg:mx-80 grid gap-10 text-sm text-center lg:text-xl lg:text-justify font-display font-semibold indent-16 pr-6 lg:border-r-2 lg:pr-8">
      <slot></slot>
  
  
    </section>

  </template>