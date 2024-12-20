<script setup lang="ts">
const { size = '48', duration = '5' } = defineProps<{size?: string, duration?: string}>();
</script>
<template>
    <button id="pieButton" class="flex items-center justify-center w-max h-max group">
        <svg id="svg1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            :width="size" :height="size" viewBox="0 0 150 150">
            <defs>
                <mask id="mask">
                    <rect width="100%" height="100%" fill="white" />
                    <circle transform="rotate(-91 75 75)" cx="75" cy="75" r="50" fill="none" stroke="black"
                        stroke-width="6" stroke-dashoffset="314.15" stroke-dasharray="314.15">

                        <animate attributeName="stroke-dashoffset" begin="pieButton.mouseenter"
                            end="pieButton.mouseleave" :dur="`${duration}s`" values="314.15;0" fill="freeze" />
                    </circle>
                </mask>
            </defs>
            <circle cx="75" cy="75" r="50" fill="none" stroke="orangered" stroke-width="6" stroke-linecap="round" />

            <circle mask="url(#mask)" cx="75" cy="75" r="50" fill="none" stroke="#d3d3d3" stroke-width="6"
                stroke-linecap="round" />
        </svg>
        <div class="absolute flex items-center justify-center text-white">
            <slot></slot>
        </div>
    </button>

</template>

