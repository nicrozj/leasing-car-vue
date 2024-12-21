import { ref } from "vue";

const isVisibleBidModal = ref(false);
const isVisibleMenuModal = ref(false);

const toggleVisibleBidModal = () => {
    isVisibleBidModal.value = !isVisibleBidModal.value;
}

const toggleVisibleMenuModal = () => {
    isVisibleMenuModal.value = !isVisibleMenuModal.value;
}

const imagePaths = [
    "img/car1.png",
    "img/car2.png",
    "img/car3.png",
    "img/car4.png",
    "img/car5.png",
]

export function useStorage() {
    return({
        toggleVisibleBidModal,
        toggleVisibleMenuModal,
        isVisibleBidModal,
        isVisibleMenuModal,
        imagePaths,
    });
}