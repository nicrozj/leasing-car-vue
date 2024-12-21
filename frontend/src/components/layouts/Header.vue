<script setup lang="ts">
import Logo from '../Logo.vue';
import UButton from '../global/UButton.vue';
import UH1 from "../global/UH1.vue"
import UH2 from "../global/UH2.vue"
import UPieButton from '../global/UPieButton.vue';
import Nav from '../layouts/Nav.vue';

import { useStorage } from "../../composables/useStorage";
const { toggleVisibleBidModal } = useStorage();

</script>
<template>
    <Nav />
    <header class="w-full flex flex-col gap-9 sm:px-12 sm:py-4">
        <div class="relative bg-black rounded-2xl h-[500px] w-full pt-10 pl-10 flex overflow-hidden">
            <div class="flex flex-col gap-6 items-start z-20">
                <UH1 classes="text-white max-w-[55%]">
                    Авто в лизинг для физических лиц
                </UH1>
                <UH2 classes="text-white">
                    Получите машину за 5 дней
                </UH2>
                <UButton type="primary" @click="toggleVisibleBidModal">Оставить заявку</UButton>
            </div>
            <div class="absolute right-0 bottom-0 z-10">
                <img src="/img/car.png" alt="">
            </div>
            <div class="absolute right-11 bottom-11 z-20 flex items-center">
                <UPieButton id="1" size="48" :duration="5">
                    <span class="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </UPieButton>
                <UPieButton id="2" size="64" :duration="5" :animate="true">
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </UPieButton>
            </div>
        </div>
    </header>
</template>