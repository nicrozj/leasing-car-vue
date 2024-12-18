<script setup lang="ts">
import Logo from './Logo.vue';
import UButton from './UButton.vue';
</script>
<template>
    <header class="sticky px-12 pt-9 items-center flex justify-between">
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
            <UButton type="smoke">Оставить заявку</UButton>
        </nav>
    </header>
</template>