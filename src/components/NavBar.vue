<script setup>
import { ref } from 'vue';


const links = [
  { nome: "home", path: "/" },
  { nome: "cultura", path: "/cultura" },
  { nome: "economia", path: "/economia" },
  { nome: "esportes", path: "/esportes" },
  { nome: "geografia", path: "/geografia" },
  { nome: "historia", path: "/historia" },
  { nome: "infraestrutura", path: "/infraestrutura" }
]

const isClosed = ref(true)

</script>

<template>

  <nav class="flex flex-col md:flex-row md:h-20 justify-evenly items-center gap-y-2 font-serif italic  bg-gray-100">
    <div :class="[isClosed ? 'hidden md:contents' : '']" v-for="link in links" :key="link.nome">



      <a :href="link.path">

        {{link.nome}}

      </a>



    </div>
    <button class="rotate-90 text-xl md:hidden" v-if="isClosed" @click="isClosed = !isClosed">
      |||
    </button>

    <button class=" text-xl md:hidden" v-if="!isClosed" @click="isClosed = !isClosed">
      ^
    </button>
  </nav>


</template>