<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  placeholder?: string,
}
const props = defineProps<Props>();

const inputValue = ref("");

</script>
<template>
  <div class="relative w-full">
    <input id="input" type="text" placeholder="" v-model="inputValue" class="peer bg-smoke-100 focus:outline-none focus:ring-4 focus:ring-primary-200/[.40] \
      py-3 px-6 rounded-xl font-bold transition-all text-smoke-300 placeholder-transparent hover:bg-smoke-200 \
      disabled:bg-smoke-100 disabled:text-smoke-200 w-full focus:bg-white" />

    <label for="input" class="absolute left-4 top-0 text-gray-400 text-base transition-all duration-300 
      ease-in-out pointer-events-none
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
      peer-focus:top-0 peer-focus:text-xs peer-focus:font-light" :class="{ 
        'top-0 text-xs font-light': inputValue,
        'font-bold': !inputValue
        }">
      {{ props.placeholder }}
    </label>
  </div>
</template>
