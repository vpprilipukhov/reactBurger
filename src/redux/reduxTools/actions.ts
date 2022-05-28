import {OFF_MODAL, ON_MODAL} from "./types";

export function onModalAC() {
    return {
        type: ON_MODAL,
    }
}

export function offModal() {
    return {
        type: OFF_MODAL,
    }
}

