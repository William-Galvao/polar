<script setup>
import { ref } from "vue";

const links = [
  { nome: "home", path: "/" },
  { nome: "cultura", path: "/cultura" },
  { nome: "economia", path: "/economia" },
  { nome: "esportes", path: "/esportes" },
  { nome: "geografia", path: "/geografia" },
  { nome: "historia", path: "/historia" },
  { nome: "infraestrutura", path: "/infraestrutura" },
];

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
      </a>
    </div>

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
      ^
    </button>
  </nav>
</template>