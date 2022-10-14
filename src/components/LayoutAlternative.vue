<script setup>

const props= defineProps({
    image: String,
    alt:String,
    

})

</script>


<template clas="lg:grid lg:grid-cols-2 lg:mt-10">

     
      <slot name="text"></slot>
    
  
  
  
    <div>
      <img class=" animate__animated animate__fadeInLeft w-4/12 rounded-lg mx-auto" :src='image'
        :alt="alt"/>
    </div>
  
    <div>
  
       
  
        <slot></slot>
      
  
    </div>
  </template>