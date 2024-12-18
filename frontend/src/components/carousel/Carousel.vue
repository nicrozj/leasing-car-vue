<script setup lang="ts">
import UButton from "../UButton.vue";
import UH1 from "../UH1.vue"
import UH2 from "../UH2.vue"
</script>
<template>
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
    </div>
</template>