import {modalAC, modalActionsTypes} from "../../redux/types/modalTypes";

export const onModalAC = (): modalAC => {
    return {
        type: modalActionsTypes.ON_MODAL,

    }
}

export const offModalAC = (): modalAC => {
    return {
        type: modalActionsTypes.OFF_MODAL,

    }
}