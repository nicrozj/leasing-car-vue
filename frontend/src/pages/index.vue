<script setup lang="ts">
import { ref } from "vue";

import LeasingCostEstimator from "../components/LeasingCostEstimator.vue";
import Header from "../components/Header.vue"
import OnlineBidModal from "../components/OnlineBidModal.vue";
import UButton from "../components/UButton.vue";
import UPieButton from "../components/UPieButton.vue";
import { useStorage } from "../composables/useStorage";

const { isVisibleModal } = useStorage();


const showModal = ref(false);
</script>

<template>
  <Header />
  <main class="flex flex-col gap-24 mx-auto mt-5 px-12">
    <LeasingCostEstimator />
    <OnlineBidModal v-model="isVisibleModal" />
  </main>
</template>
