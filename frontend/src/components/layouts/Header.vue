<script setup lang="ts">
import { ref } from 'vue';

import Logo from '../Logo.vue';
import UButton from '../global/UButton.vue';
import UH1 from "../global/UH1.vue"
import UH2 from "../global/UH2.vue"
import UPieButton from '../global/UPieButton.vue';
import Nav from '../layouts/Nav.vue';

import { useStorage } from "../../composables/useStorage";
const { toggleVisibleBidModal, imagePaths } = useStorage();

const isChanging = ref(false);
const currentIndexSlide = ref(0);
const currentPathSlide = ref(imagePaths[0]);

const nextSlide = () => {
    isChanging.value = true;
    setTimeout(() => {
        currentIndexSlide.value = (currentIndexSlide.value + 1) % imagePaths.length;
        currentPathSlide.value = imagePaths[currentIndexSlide.value];
    }, 250);
}

const changeSlideTo = (id: number) => {
    isChanging.value = true;
    setTimeout(() => {
        currentIndexSlide.value = id;
        currentPathSlide.value = imagePaths[currentIndexSlide.value];
    }, 250);
}

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
                <img :src="currentPathSlide" class="transition-opacity duration-500 ease-in-out"
                    :class="{ 'opacity-0': isChanging, 'opacity-100': !isChanging }" @load="isChanging = false">
            </div>
            <div class="absolute right-11 bottom-11 z-30 flex gap-4 items-center">
                <UPieButton :size="24" class="group">
                    <span
                        class="material-symbols-outlined text-sm text-[#5858588D] group-hover:text-[white] transition-colors">
                        arrow_back_ios
                    </span>
                </UPieButton>
                <UPieButton @change-slide="nextSlide" :size="46" animate>
                    <span class="material-symbols-outlined text-[20px]">
                        arrow_forward_ios
                    </span>
                </UPieButton>
            </div>
            <div class="absolute flex justify-center left-0 right-0 bottom-4 z-20">
                <div class="flex gap-4 items-center min-h-3">
                    <button @click="changeSlideTo(id)" v-for="(slide, id) in imagePaths.length"
                        class="rounded-full bg-white transition-all ease-in delay-150"
                        :class="id == currentIndexSlide ? ['size-3'] : ['size-2']" />
                </div>
            </div>
            <div>

            </div>
        </div>
    </header>
</template>