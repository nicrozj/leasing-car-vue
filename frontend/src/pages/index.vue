<script setup lang="ts">
import { ref } from "vue";

import LeasingCostEstimator from "../components/LeasingCostEstimator.vue";
import Header from "../components/layouts/Header.vue"
import OnlineBidModal from "../components/modals/OnlineBidModal.vue";
import MenuModal from "../components/modals/MenuModal.vue";
import UButton from "../components/global/UButton.vue";
import UPieButton from "../components/global/UPieButton.vue";
import { useStorage } from "../composables/useStorage";

const { isVisibleBidModal, isVisibleMenuModal } = useStorage();


const showModal = ref(false);
</script>

<template>
  <Header />
  <main class="flex flex-col gap-24 mx-auto mt-5 px-12">
    <LeasingCostEstimator />
    <OnlineBidModal v-model="isVisibleBidModal" />
    <MenuModal v-model="isVisibleMenuModal" />
  </main>
</template>
