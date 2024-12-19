<script setup lang="ts">
import Calculator from "@/components/calculator/Calculator.vue";
import Header from "../components/Header.vue"
import UButton from "../components/UButton.vue";
import UPieButton from "../components/UPieButton.vue";
</script>

<template>
  <Header />
  <main class="flex flex-col gap-24 mx-auto mt-5 px-12">
    <Calculator />
  </main>
</template>
