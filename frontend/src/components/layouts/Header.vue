<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

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

const changeSlideTo = (id: number) => {
    id %= imagePaths.length;
    if (id < 0) id = imagePaths.length -1;
    isChanging.value = true;
    currentIndexSlide.value = id;
    currentPathSlide.value = imagePaths[currentIndexSlide.value];
}

</script>
<template>
    <Nav />
    <header class="w-full flex flex-col gap-9 sm:px-12 sm:py-4">
        <div class="relative bg-black rounded-b-2xl h-[500px] w-full pt-10 px-10 overflow-hidden sm:rounded-2xl">
            <div class="transition-opacity duration-500 ease-in-out absolute -top-20 -left-40 sm:flex sm:justify-center sm:-top-10 z-10 
                sm:left-0 sm:-right-10 md:scale-125 md:bottom-10 md:-right-8 md:left-auto md:top-auto">
                <img :src="currentPathSlide" class=" scale-[1.2] sm:scale-100 md:scale-[0.8]"
                    :class="{ 'opacity-0': isChanging, 'opacity-100': !isChanging }" @load="isChanging = false">
            </div>

            <div class="absolute bottom-20 items-start z-20 md:flex md:flex-col md:top-10 md:max-w-[420px]">
                <UH1 classes="text-white text-[38px] sm:text-5xl">
                    Авто в лизинг для физических лиц
                </UH1>
                <UH2 classes="text-white hidden mt-3 md:block">
                    Получите машину за 5 дней
                </UH2>
                <UButton class="mt-[32px]" type="primary" @click="toggleVisibleBidModal">Оставить заявку</UButton>
            </div>
            <div class="absolute right-11 bottom-11 hidden z-30 md:flex gap-4 items-center">
                <UPieButton @change-slide="changeSlideTo(--currentIndexSlide)" :size=" 24" class="group">
                    <span
                        class="material-symbols-outlined text-sm text-[#5858588D] group-hover:text-[white] transition-colors">
                        arrow_back_ios
                    </span>
                </UPieButton>
                <UPieButton @change-slide="changeSlideTo(++currentIndexSlide)" :size="46" animate>
                    <span class="material-symbols-outlined text-[20px]">
                        arrow_forward_ios
                    </span>
                </UPieButton>
            </div>
            <div class="absolute flex justify-center left-0 right-0 bottom-4 z-20">
                <div class="flex gap-4 items-center min-h-3">
                    <button @click="changeSlideTo(id)" v-for="(slide, id) in imagePaths.length"
                        class="rounded-full bg-white transition-all ease-in delay-150"
                        :class="id == currentIndexSlide ? ['size-3 bg-white'] : ['size-2 bg-smoke-300']" />
                </div>
            </div>
            <div>

            </div>
        </div>
    </header>
</template>