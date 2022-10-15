<script setup>
import { ref } from "vue";

const links = [
  { nome: "Home", path: "/", icone: "house" },
  { nome: "Cultura", path: "/cultura", icone: "masks-theater" },
  { nome: "Economia", path: "/economia", icone: "coins" },
  { nome: "Esportes", path: "/esportes", icone: "medal" },
  { nome: "Geografia", path: "/geografia", icone: "mountain-sun" },
  { nome: "História", path: "/historia", icone: "scroll" },
  { nome: "Infraestrutura", path: "/infraestrutura", icone: "building" },
];

const isClosed = ref(true);
</script>

<template>
  <nav class="
      animate__animated animate__fadeInDown
      flex flex-col
      md:flex-row md:h-20
      justify-evenly
      items-center
      gap-y-2
      font-serif font-semibold
      bg-gray-100
    ">
    <div :class="[isClosed ? 'hidden md:contents' : '']" v-for="link in links" :key="link.nome">
      <a :href="link.path" class="hover:scale-125 hover:text-gray-700">
        <span class="mx-1">
          <fa :icon="link.icone"></fa>
        </span> {{ link.nome }}
      </a>
    </div>
    <button class="text-xl md:hidden" v-if="isClosed" @click="isClosed = !isClosed">
      <fa icon="bars" />
    </button>

    <button class="text-xl md:hidden" v-if="!isClosed" @click="isClosed = !isClosed">
      <fa icon="arrow-up" />
    </button>
  </nav>
</template>