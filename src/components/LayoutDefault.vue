<script setup>
import Footer from './Footer.vue';

const props = defineProps({
    image: String,
    titulo: String,
    subtitulo: String,


})

</script>

<template>

    <section class="bg-gray-100">

        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="animate__animated animate__fadeInLeft mr-auto place-self-center lg:col-span-7">
                <h1 class=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    {{titulo}}</h1>
                <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-2xl">
                    {{subtitulo}}</p>
            </div>
            <div class="animate__animated animate__fadeInRight lg:mt-0 lg:col-span-5 lg:flex">
                <img class="rounded-lg w-full lg:w-full" :src='image' alt="mockup">
            </div>
        </div>
    </section>

    <section
        class=" animate__animated animate__fadeInLeft lg:mx-80 lg:my-10 mx-50 my-10 grid gap-8 text-sm text-center lg:text-xl lg:text-justify font-display font-semibold indent-16 border-r-2 pr-8">
        <slot></slot>

    </section>
    <Footer />
</template>
