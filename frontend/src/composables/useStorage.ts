import { ref } from "vue";

const isVisibleBidModal = ref(false);
const isVisibleMenuModal = ref(false);

const toggleVisibleBidModal = () => {
    isVisibleBidModal.value = !isVisibleBidModal.value;
}

const toggleVisibleMenuModal = () => {
    isVisibleMenuModal.value = !isVisibleMenuModal.value;
}

export function useStorage() {
    return({
        toggleVisibleBidModal,
        toggleVisibleMenuModal,
        isVisibleBidModal,
        isVisibleMenuModal,
    });
}