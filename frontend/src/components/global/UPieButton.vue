<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";

interface Props {
    size: number,
    animate?: boolean,
}

const emit = defineEmits(['update:modelValue', 'changeSlide']);
const { size, animate } = defineProps<Props>();

const strokeDasharray = 283;
const strokeDashoffset = ref(strokeDasharray);
const svgSize = computed(() => size + 8 + "px");


watch(strokeDashoffset, () => {
    console.log(strokeDashoffset);
})

const onClick = () => {
    strokeDashoffset.value = strokeDasharray;
    emit("changeSlide")
};
</script>

<template>
    <button class="relative flex items-center justify-center text-white h-full w-full" @click="onClick">
        <div class="absolute flex items-center justify-center">
            <slot></slot>
        </div>
        <svg id="svg" class="mr-1 -rotate-90" :width="svgSize" :height="svgSize" viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <circle id="animation" cx="50" cy="50" r="45" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"
                stroke-dasharray="283" :stroke-dashoffset="strokeDashoffset">
                <animate v-if="animate" attributeName="stroke-dashoffset" dur="4s" :values="`${strokeDasharray};0`" fill="freeze"/>
            </circle>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#5858588D" stroke-width="5" stroke-linecap="round"
                stroke-dasharray="283" />
        </svg>
    </button>
</template>
