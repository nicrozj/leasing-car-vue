<script setup lang="ts">
const { size = '48' } = defineProps<{size?: string}>();
</script>
<template>
    <button id="pieButton" class="relative flex items-center justify-center w-max h-max group">
        <svg id="svg1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            :width="size" :height="size" viewBox="0 0 150 150">
            <defs>
                <mask id="mask">
                    <circle transform="rotate(-91 75 75)" cx="75" cy="75" r="50" fill="none" stroke="black"
                        stroke-width="3" stroke-dashoffset="314.15" stroke-dasharray="314.15">
                        <animate attributeName="stroke-dashoffset" begin="pieButton.mouseover"
                            end="pieButton.mouseleave" dur="4s" values="314.15;0" fill="white" />
                    </circle>
                </mask>
            </defs>
            <circle cx="75" cy="75" r="50" fill="none" stroke="#585858" stroke-width="3" stroke-linecap="round" />
        </svg>
        <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center text-white">
            <slot></slot>
        </div>
    </button>
</template>


