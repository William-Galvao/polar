<script setup>

const links = [
  { nome: "home", path: "/" },
  { nome: "cultura", path: "/cultura" },
  { nome: "economia", path: "/economia" },
  { nome: "esportes", path: "/esportes" },
  { nome: "geografia", path: "/geografia" },
  { nome: "historia", path: "/historia" },
  { nome: "infraestrutura", path: "/infraestrutura" }
]

</script>

<template>

  <nav id="navbar" class="flex justify-center" v-for="link in links" :key="link.nome">

    <span>

      <a :href="link.path">

        {{link.nome}}

      </a>

    </span>

  </nav>

</template>;