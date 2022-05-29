import {OFF_MODAL, ON_MODAL} from "./types";
import {TaskActionTypes} from "../../tools/types";


export function onModalAC(): TaskActionTypes {
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



