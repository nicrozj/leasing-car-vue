<script setup lang="ts">
const { classes } = defineProps<{classes?: string}>()
</script>
<template>
    <h1 :class="`font-nekst text-5xl ${classes}`">
        <slot></slot>
    </h1>
</template>