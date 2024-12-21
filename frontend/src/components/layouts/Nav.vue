<script setup lang="ts">
import Logo from "../Logo.vue";
import ULink from "../global/ULink.vue";
import { useStorage } from "../../composables/useStorage";

const { toggleVisibleBidModal, toggleVisibleMenuModal } = useStorage();

</script>
<template>
    <nav class="sticky top-0 items-center flex justify-between z-50 px-5 py-3 bg-white sm:py-6">
        <div class="flex gap-4 items-center">
            <div>
                <Logo />
            </div>
            <div class="hidden gap-4 items-center sm:flex">
                <div class="h-8 w-[1px] bg-accent bg-opacity-50"></div>
                <div class="text-accent text-opacity-50">
                    лизинговая компания
                </div>
            </div>
        </div>
        <div class="flex items-center">
            <div class="hidden items-center gap-8 lg:flex">
                <RouterLink to="/" class="text-smoke-300 font-semibold">Лизинг</RouterLink>
                <RouterLink to="/" class="text-smoke-300 font-semibold">Каталог</RouterLink>
                <RouterLink to="/" class="text-smoke-300 font-semibold">О нас</RouterLink>
                <UButton type="border" @click="toggleVisibleBidModal">Оставить заявку</UButton>
            </div>
            <button @click="toggleVisibleMenuModal"
                class="flex justify-end items-center visible md:visible lg:invisible w-max">
                <span class="material-symbols-outlined">
                    menu
                </span>
            </button>
        </div>
    </nav>
</template>