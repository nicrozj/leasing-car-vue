<script setup lang="ts">
interface Props {
    to: string,
}
const props = defineProps<Props>();
</script>
<template>
    <RouterLink :to="props.to" class="text-3xl text-smoke-300 font-semibold"><slot></slot></RouterLink>
</template>