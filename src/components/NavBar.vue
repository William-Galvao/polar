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

  <nav class="flex justify-evenly items-center h-20">
    <div v-for="link in links" :key="link.nome">



      <a :href="link.path">

        {{link.nome}}

      </a>



    </div>
  </nav>


</template>