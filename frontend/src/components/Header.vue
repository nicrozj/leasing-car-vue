<script setup lang="ts">
import Logo from './Logo.vue';
import UButton from './UButton.vue';
import UH1 from "./UH1.vue"
import UH2 from "./UH2.vue"
import UPieButton from './UPieButton.vue';
</script>
<template>
    <header class="sticky flex flex-col gap-9 px-12 pt-9">
        <section class="items-center flex justify-between">
            <div class="flex gap-4 items-center">
                <div>
                    <Logo />
                </div>
                <div class="h-8 w-[1px] bg-accent bg-opacity-50"></div>
                <div class="text-accent text-opacity-50">
                    лизинговая компания
                </div>
            </div>
            <nav class="flex items-center gap-8">
                <RouterLink to="/" class="text-smoke-300 font-semibold">Лизинг</RouterLink>
                <RouterLink to="/" class="text-smoke-300 font-semibold">Каталог</RouterLink>
                <RouterLink to="/" class="text-smoke-300 font-semibold">О нас</RouterLink>
                <UButton type="border">Оставить заявку</UButton>
            </nav>
        </section>
        <div class="relative bg-black rounded-2xl h-[500px] w-full pt-10 pl-10 flex overflow-hidden">
            <div class="flex flex-col gap-6 items-start z-20">
                <UH1 classes="text-white max-w-[55%]">
                    Авто в лизинг для физических лиц
                </UH1>
                <UH2 classes="text-white">
                    Получите машину за 5 дней
                </UH2>
                <UButton type="primary">Оставить заявку</UButton>
            </div>
            <div class="absolute right-0 bottom-0 z-10">
                <img src="/img/car.png" alt="">
            </div>
            <div class="absolute right-11 bottom-11 z-20 flex items-center">
                <UPieButton size="48"><span class="text-white text-opacity-40"><</span></UPieButton>
                <UPieButton size="64">></UPieButton>
            </div>
        </div>
    </header>
</template>