<script setup>
<<<<<<< HEAD
import { ref } from "vue";
=======
import { ref } from 'vue';

>>>>>>> 3d8207fb5cd389d8ec4562c44917da85684b5366

const links = [
  { nome: "home", path: "/" },
  { nome: "cultura", path: "/cultura" },
  { nome: "economia", path: "/economia" },
  { nome: "esportes", path: "/esportes" },
  { nome: "geografia", path: "/geografia" },
  { nome: "historia", path: "/historia" },
  { nome: "infraestrutura", path: "/infraestrutura" },
];

<<<<<<< HEAD
const isClosed = ref(true);
</script>

<template>
  <nav
    class="
      flex flex-col
      md:flex-row
      justify-end
      md:justify-evenly
      items-center
      py-8
      gap-y-2
      animate__animated animate__fadeInDown
    "
  >
    <div
      :class="[isClosed ? 'hidden md:contents' : '']"
      v-for="link in links"
      :key="link.nome"
    >
      <a class="hover:font-bold" :href="link.path">
        {{ link.nome }}
=======
const isClosed = ref(true)

</script>

<template>

  <nav class="flex flex-col md:flex-row md:h-20 justify-evenly items-center gap-y-2 font-serif italic  bg-gray-100">
    <div :class="[isClosed ? 'hidden md:contents' : '']" v-for="link in links" :key="link.nome">



      <a :href="link.path">

        {{link.nome}}

>>>>>>> 3d8207fb5cd389d8ec4562c44917da85684b5366
      </a>
    </div>
<<<<<<< HEAD

    <button
      @click="this.isClosed = !this.isClosed"
      v-if="isClosed"
      class="md:hidden self-end mr-8 rotate-90 text-xl hover:text-gray-400"
    >
      |||
    </button>

    <button
      @click="this.isClosed = !this.isClosed"
      v-if="!isClosed"
      class="md:hidden text-xl hover:text-gray-400"
    >
=======
    <button class="rotate-90 text-xl md:hidden" v-if="isClosed" @click="isClosed = !isClosed">
      |||
    </button>

    <button class=" text-xl md:hidden" v-if="!isClosed" @click="isClosed = !isClosed">
>>>>>>> 3d8207fb5cd389d8ec4562c44917da85684b5366
      ^
    </button>
  </nav>
</template>