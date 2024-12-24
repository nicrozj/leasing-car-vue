<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import UH1 from './global/UH1.vue';
import UH3 from './global/UH3.vue';
import UP from './global/UP.vue';
import UInputSlider from './global/UInputSlider.vue';
import UButton from './global/UButton.vue';
import { useStorage } from "../composables/useStorage";

const { toggleVisibleBidModal } = useStorage();

const costInput = ref(1000000);
const initialPaymentInput = ref(costInput.value * 0.9);
const periodInput = ref(12);

const sum = ref(0);
const period = ref(0);
const percent = ref(0);

const maxInitialPaymentValue = computed(() => (Math.round(costInput.value * 0.9)));
const minInitialPaymentValue = computed(() => (Math.round(costInput.value * 0.2)));

const formatMoney = (value: number) => {
    return value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumSignificantDigits: 6,
    });
};

function calculate() {
    sum.value = Math.round(initialPaymentInput.value + (costInput.value - initialPaymentInput.value) * (1 + 0.01 * periodInput.value));
    period.value = Math.round((costInput.value - initialPaymentInput.value) * (1 + 0.01 * periodInput.value) / periodInput.value)
    percent.value = Math.round((initialPaymentInput.value / costInput.value) * 100);
}

const handleBlurEvent = () => {
    calculate();
};

calculate();
</script>
<template>
    <section class="flex flex-col mb-20">
        <UH1 class="text-accent max-w-[600px] max-sm:w-1/2 text-[40px] sm:text-5xl">Рассчитайте стоимость автомобиля в лизинг</UH1>
        <div class="grid sm:grid-cols-1 lg:grid-cols-3 space-between gap-6 mt-8">
            <UInputSlider @blur="handleBlurEvent" type=" number" label="Стоимость автомобиляx" v-model="costInput"
                :min="1000000" :max="3300000">
                <span class="text-3xl font-nekst text-smoke-300">₽</span>
            </UInputSlider>
            <UInputSlider type="number" label="Первоначальный взнос" v-model="initialPaymentInput"
                :min="minInitialPaymentValue" :max="maxInitialPaymentValue" @blur="handleBlurEvent">
                <div class="bg-smoke-200 w-full h-full flex items-center justify-center rounded-xl">
                    <UH3 classes="text-smoke-300">{{ percent }}%</UH3>
                </div>
            </UInputSlider>
            <UInputSlider type="date" label="Срок лизинга" v-model="periodInput" :min="6" :max="60">
                <span class="text-3xl font-nekst text-smoke-300">мес.</span>
            </UInputSlider>
        </div>
        <div class="mt-11 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-between items-center">
            <div class="flex flex-col gap-2">
                <UP>Сумма договора лизинга</UP>
                <UH1 classes="text-smoke-300">{{ formatMoney(sum) }}</UH1>
            </div>
            <div class="flex flex-col gap-2">
                <UP>Ежемесячный платеж от</UP>
                <UH1 classes="text-smoke-300">{{ formatMoney(period) }}</UH1>
            </div>
            <div>
                <UButton type="primary" classes="w-full" @click="toggleVisibleBidModal">Оставить заявку</UButton>
            </div>
        </div>
    </section>
</template>