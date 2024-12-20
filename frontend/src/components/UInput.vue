<script setup lang="ts">
interface Props {
  placeholder?: string,
}
const props = defineProps<Props>();
</script>
<template>
  <div class="relative w-full">
    <input 
      id="input" 
      type="text" 
      placeholder=""
      class="peer bg-smoke-100 focus:outline-none focus:ring-4 focus:ring-primary-200/[.40] \
      py-3 px-6 rounded-xl font-bold text-smoke-300 placeholder-transparent hover:bg-smoke-200 \
      disabled:bg-smoke-100 disabled:text-smoke-200" 
    />

    <label 
      for="input"
      class="absolute left-4 top-3 text-gray-400 font-bold text-base transition-all duration-300 \ 
      ease-in-out pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base \
      peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:font-light">
      {{ props.placeholder }}
    </label>
  </div>
</template>
