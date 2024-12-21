<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Props {
    size: number,
    animate?: boolean,
}

const emit = defineEmits(['update:modelValue', 'changeSlide']);
const { size, animate } = defineProps<Props>();

const duration = 5000;
const currentSlide = ref(1);
const strokeDasharray = 283; // Полный периметр окружности
const strokeDashoffset = ref(strokeDasharray);

// Вычисляемые значения для размеров
const computedSize = computed(() => `w-[${size}] h-[${size}]`);
const svgSize = computed(() => size + 8 + "px"); // Немного больше, чтобы бордер помещался

// Анимация
const animateBorder = () => {
    if (!animate) return;
    let startTime = performance.now();

    const update = (timestamp: any) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        strokeDashoffset.value = strokeDasharray * (1 - progress);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            onClick();
            startTime = performance.now(); // Перезапуск цикла
            requestAnimationFrame(update);
        }
    };

    requestAnimationFrame(update);
};

const resetAnimation = () => {
    strokeDashoffset.value = strokeDasharray; // Сброс окружности
    animateBorder(); // Перезапуск анимации
};

// Подключаем метод к родительскому компоненту через `expose`
defineExpose({
    resetAnimation,
});

const onClick = () => {
    strokeDashoffset.value = strokeDasharray;
    emit("changeSlide")
};

onMounted(() => {
    animateBorder();
});
</script>

<template>
    <button class="relative flex items-center justify-center text-white h-full w-full" @click="onClick">
        <div class="absolute flex items-center justify-center">
            <slot></slot>
        </div>
        <svg class="mr-1 -rotate-90" :width="svgSize" :height="svgSize" viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"
                stroke-dasharray="283" :stroke-dashoffset="strokeDashoffset" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#5858588D" stroke-width="5" stroke-linecap="round"
                stroke-dasharray="283" />
        </svg>
    </button>
</template>
