<script setup lang="ts">
interface Props {
    to: string,
}
const props = defineProps<Props>();
</script>
<template>
    <RouterLink 
        :to="props.to" 
        class="text-smoke-300 hover:text-accent transitions-all font-semibold"><slot></slot></RouterLink>
</template>