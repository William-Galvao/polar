<script setup>

const props= defineProps({
    image: String,
    
    

})

</script>


<template>

    <p class=" animate__animated animate__fadeInRight mx-20 my-10  text-sm text-center lg:text-xl lg:text-justify font-display font-semibold indent-16 border-r-2 pr-8">
      <slot></slot>
    </p>
  
  
  
    <div>
      <img class=" animate__animated animate__fadeInLeft w-10/12 rounded-lg mx-auto" :src='image'
        alt="Atleta de Eski">
    </div>
  
    <div>
  
      <p class=" animate__animated animate__fadeInRight mx-20 my-10  text-sm text-center lg:text-xl lg:text-justify font-display font-semibold indent-16 border-r-2 pr-8">
  
        <slot name="text"></slot>
      </p>
  
    </div>
  </template>