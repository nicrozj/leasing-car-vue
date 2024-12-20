<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import UH1 from './UH1.vue';
import UH3 from './UH3.vue';
import UP from './UP.vue';
import UInputSlider from './UInputSlider.vue';
import UButton from './UButton.vue';
import { useStorage } from "../composables/useStorage";

const { toggleVisibleModal } = useStorage();

const costInput = ref(1000000);
const initialPaymentInput = ref(100000);
const periodInput = ref(12);

const sum = computed(() => Math.round(initialPaymentInput.value + (costInput.value - initialPaymentInput.value) * (1 + 0.01 * periodInput.value)));
const period = computed(() => Math.round((costInput.value - initialPaymentInput.value) * (1 + 0.01 * periodInput.value) / periodInput.value))

const format_money = (value: number) => {
    return value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumSignificantDigits: 6,
    });
};
</script>
<template>
    <section class="flex flex-col mb-20">
        <UH1 classes="text-accent w-1/2">Рассчитайте стоимость автомобиля в лизинг</UH1>
        <div class="grid sm:grid-cols-1 lg:grid-cols-3 space-between gap-6 mt-8">
            <UInputSlider type="number" label="Стоимость автомобиляx" v-model="costInput" :min="1000000" :max="3300000">
                <span class="text-3xl font-nekst text-smoke-300">₽</span>
            </UInputSlider>
            <UInputSlider type="number" label="Первоначальный взнос" v-model="initialPaymentInput" :min="200000"
                :max="3300000">
                <div class="bg-smoke-200 w-full h-full flex items-center justify-center rounded-xl">
                    <UH3 classes="text-smoke-300">13%</UH3>
                </div>
            </UInputSlider>
            <UInputSlider type="date" label="Срок лизинга" v-model="periodInput" :min="6" :max="60">
                <span class="text-3xl font-nekst text-smoke-300">мес.</span>
            </UInputSlider>
        </div>
        <div class="mt-11 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-between items-center">
            <div class="flex flex-col gap-2">
                <UP>Сумма договора лизинга</UP>
                <UH1 classes="text-smoke-300">{{ format_money(sum) }}</UH1>
            </div>
            <div class="flex flex-col gap-2">
                <UP>Ежемесячный платеж от</UP>
                <UH1 classes="text-smoke-300">{{ format_money(period) }}</UH1>
            </div>
            <div>
                <UButton type="primary" classes="w-full" @click="toggleVisibleModal">Оставить заявку</UButton>
            </div>
        </div>
    </section>
</template>