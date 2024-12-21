<script setup lang="ts">
import UH1 from './UH1.vue';
import UP from './UP.vue';
import UInput from './UInput.vue';
import UButton from './UButton.vue';

import { useStorage } from "../composables/useStorage";

interface Props {
    class?: string;
}

const { toggleVisibleBidModal } = useStorage();

const model = defineModel<boolean>();

const props = defineProps<Props>();
</script>
<template>
    <Transition enter-from-class="opacity-0 scale-[1.03]" leave-to-class="opacity-0 scale-[1.02]">
        <div v-if="model" class="fixed z-50 top-0 left-0 w-full h-screen bg-black/35 transition duration-200"
            :class="props.class">
            <div class="absolute bottom-0 bg-white w-full h-[80%] rounded-3xl">
                <div class="w-[700px] mx-auto pt-40">
                    <UH1>Онлайн-заявка</UH1>
                    <UP>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</UP>
                    <div class="flex justify-between gap-8">
                        <UInput placeholder="Телефон" class="mt-11 w-full" />
                        <UInput placeholder="Имя" class="mt-11 w-full" />
                    </div>
                    <div class="mt-8 flex justify-between w-full h-30 rounded-xl border border-smoke-200 p-7">
                        <UP class="w-[63%] text-accent/40">
                            Нажимая на кнопку «Оставить заявку», я даю согласие <span class="text-accent">на обработку
                                персональных данных</span>
                        </UP>
                        <UButton type="primary">Оставить заявку</UButton>
                    </div>
                </div>
                <button @click="toggleVisibleBidModal"
                    class="absolute size-12 bg-smoke-200 rounded-full right-12 top-12">
                    <span class="h-full material-symbols-outlined flex justify-center items-center text-smoke-300">
                        close
                    </span>
                </button>
            </div>

        </div>
    </Transition>
</template>