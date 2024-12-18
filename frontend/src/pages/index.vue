<script setup lang="ts">
import Calculator from "@/components/calculator/Calculator.vue";
import Header from "../components/Header.vue"
import Carousel from "../components/carousel/Carousel.vue";
</script>

<template>
  <Header />
  <main
    class="flex flex-col gap-24 mx-auto mt-5 px-12"
  >
  <Carousel />
  <Calculator />
  </main>
</template>
