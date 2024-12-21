<script setup lang="ts">
import ULink from '../global/ULink.vue';
import UButton from '../global/UButton.vue';

import { useStorage } from "../../composables/useStorage";

interface Props {
    class?: string;
}

const { toggleVisibleMenuModal } = useStorage();

const model = defineModel<boolean>();

const props = defineProps<Props>();
</script>
<template>
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div v-if="model" class="fixed z-50 top-0 left-0 w-full h-screen bg-black/45 transition duration-200"
            :class="props.class">
            <div class="flex flex-col py-6 justify-between absolute right-0 bg-white w-[80%] h-full rounded-l-3xl px-6">
                <ul class=" pt-16 flex flex-col gap-8">
                    <li>
                        <ULink to="/">Лизинг</ULink>
                    </li>
                    <li>
                        <ULink to="/">Каталог</ULink>
                    </li>
                    <li>
                        <ULink to="/">О нас</ULink>
                    </li>
                </ul>
                <UButton type="primary">Оставить заявку</UButton>
            </div>
            <button class="absolute right-4 top-6" @click="toggleVisibleMenuModal">
                <span class="material-symbols-outlined text-5xl">
                    close
                </span>
            </button>
        </div>
    </Transition>
</template>