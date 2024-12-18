<script setup lang="ts">
interface Props {
    label: string,
    min: number,
    max: number,
}
const { label } = defineProps<Props>();
const value = defineModel<number>();
</script>
<template>
    <div class="flex flex-col gap-6 w-full">
        <label class="text-smoke-300" for="input">{{ label }}</label>
        <div class="relative w-full flex ring-smoke-200 rounded-xl has-[:focus]:ring-2">
            <input type="number" value="0" name="input" v-model="value" :min="min" :max="max"
                class="bg-smoke-100 w-full text-smoke-300 text-3xl font-nekst rounded-l-xl py-4 px-6 outline-none focus:bg-white peer" />
            <input type="range" value="0" v-model="value" :min="min" :max="max"
                class="absolute appearance-none rounded-full text-3xl inset-x-5 -bottom-0 h-[2px] bg-primary-200 accent-primary-200" />
            <div class="bg-smoke-100 rounded-r-xl w-28 p-2 flex justify-center items-center peer-focus:bg-white">
                <slot></slot>
            </div>
        </div>
    </div>
</template>