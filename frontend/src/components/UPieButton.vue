<script setup lang="ts">
import { onMounted } from 'vue';

interface Props {
    id: string,
    size?: string,
    duration?: number,
    animate?: boolean,
}

const { id, size = '48', duration = 5, animate = false } = defineProps<Props>();

onMounted(() => {
    if (!animate) return;
    const animation = document.getElementById(`${id}`) as SVGAnimateElement | null;

    if(animation) {
        setInterval(() => {
            animation.beginElement();
        }, duration * 1000);
    } else {
        console.error("Анимация не найдена");
    }
})

</script>
<template>
    <button id="pieButton" class="relative flex items-center justify-center w-max h-max group">
        
    </button>
</template>

