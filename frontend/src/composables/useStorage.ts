import { ref } from "vue";

const isVisibleModal = ref(false);

const toggleVisibleModal = () => {
    isVisibleModal.value = !isVisibleModal.value;
}

export function useStorage() {
    return({
        toggleVisibleModal,
        isVisibleModal,
    });
}