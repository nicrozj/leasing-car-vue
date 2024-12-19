<script setup lang="ts">
type ButtonType = "primary" | "border" | "smoke";

interface Props {
    type: ButtonType,
    isLoading?: boolean,
    disabled?: boolean,
    classes?: string,
}

const { type, isLoading, disabled, classes } = defineProps<Props>();

const buttonClasses = {
    "primary": "bg-primary-200 text-white hover:bg-accent active:bg-smoke-300 disabled:bg-opacity-40 disabled:text-opacity-40 transition-all delay-75",
    "border": "border border-primary-200 bg-white text-primary-200 hover:bg-primary-200 hover:text-white active:bg-primary-100 disabled:opacity-40 disabled:text-opacity-40 transition-all delay-75",
    "smoke": "bg-smoke-100 text-black hover:bg-accent hover:text-white active:bg-smoke-300 disabled:bg-opacity-40 disabled:text-opacity-40 transition-all delay-75",
}

</script>
<template>
    <button 
        class="px-6 py-3 rounded-full font-semibold"
        :class="`${buttonClasses[type]} ${classes}`"
        :disabled="disabled ?? false">
        <slot></slot>
    </button>
</template>