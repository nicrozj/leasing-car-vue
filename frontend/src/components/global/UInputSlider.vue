<script setup lang="ts">
import { computed, watch } from 'vue';

const emit = defineEmits(['update:modelValue', 'blur']);

interface Props {
    label: string,
    min: number,
    max: number,
}
const { label, min, max } = defineProps<Props>();
const value = defineModel<number>({
    default: 1000000
});

const gradientPosition = computed(() => {
    return (value.value - min) / (max - min) * 100;
});

watch(value, (newValue, oldValue) => {
    if (typeof newValue !== 'number') {
        value.value = Number(newValue);
    }
});

const onBlur = () => {
    if (value.value < min) value.value = min;
    if (value.value > max) value.value = max;
    emit("blur");
}

</script>
<template>
    <div class="flex flex-col gap-6 w-full">
        <label class="text-smoke-300" for="input">{{ label }}</label>
        <div class="relative w-full flex ring-smoke-200 rounded-xl has-[:focus]:ring-2">
            <input @blur="onBlur" @keyup.enter="onBlur" type="number" name="input" v-model.number="value" :min="min"
                :max="max"
                class="bg-smoke-100 w-full text-smoke-300 text-3xl font-nekst rounded-l-xl py-4 px-6 outline-none focus:bg-white peer" />
            <input @input="onBlur" type="range" v-model.number="value" :min="min" :max="max"
                class="absolute appearance-none rounded-full text-3xl inset-x-5 -bottom-0 h-[2px] bg-primary-200 accent-primary-200" />
            <div class="bg-smoke-100 rounded-r-xl w-28 p-2 flex justify-center items-center peer-focus:bg-white">
                <slot></slot>
            </div>
        </div>
    </div>
</template>