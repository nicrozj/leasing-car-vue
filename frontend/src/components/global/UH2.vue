<script setup lang="ts">
const { classes } = defineProps<{ classes: string }>()
</script>
<template>
    <h2 :class="`font-nekst text-3xl ${classes}`">
        <slot></slot>
    </h2>
</template>