import {OFF_MODAL, ON_MODAL} from "./types";

interface onModalAC{
    type: typeof ON_MODAL
    payload: any[]
}

interface offModal{
    type: typeof OFF_MODAL
    payload: any[]
}

export type TaskActionTypes = onModalAC | offModal

export function onnModalAC(): TaskActionTypes {
    return {
        type: ON_MODAL,
        payload: []
    }
}

export function offModalAC(): TaskActionTypes {
    return {
        type: OFF_MODAL,
        payload: []
    }
}



interface actionModal{
    type: typeof ON_MODAL | typeof OFF_MODAL
}

export type actionTypes = actionModal

