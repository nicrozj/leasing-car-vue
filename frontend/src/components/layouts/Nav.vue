<script setup lang="ts">
import Logo from "../Logo.vue";
import ULink from "../global/ULink.vue";
import { useStorage } from "../../composables/useStorage";

const { toggleVisibleBidModal, toggleVisibleMenuModal } = useStorage();

</script>
<template>
    <nav class="sticky top-0 items-center flex justify-between z-50 px-5 py-3 bg-black sm:py-6 sm:bg-white">
        <div class="flex gap-4 items-center">
            <div>
                <Logo theme="black" />
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
                <ULink to="/">Лизинг</ULink>
                <ULink to="/">Каталог</ULink>
                <ULink to="/">О нас</ULink>
                <UButton type="border" @click="toggleVisibleBidModal">Оставить заявку</UButton>
            </div>
            <button @click="toggleVisibleMenuModal"
                class="flex justify-end items-center visible md:visible lg:invisible w-max">
                <span class="text-white material-symbols-outlined sm:text-black">
                    menu
                </span>
            </button>
        </div>
    </nav>
</template>