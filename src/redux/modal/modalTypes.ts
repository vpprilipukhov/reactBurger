import {OFF_MODAL, ON_MODAL} from "../reduxTools/types";


export interface activeType {
    activeModal: boolean,

}



export interface onModalAC{
    type: typeof ON_MODAL
    payload: any[]
}

export interface offModal{
    type: typeof OFF_MODAL
    payload: any[]
}


export type TaskActionTypes = onModalAC | offModal

interface actionModal{
    type: typeof ON_MODAL | typeof OFF_MODAL
}

export type actionTypes = actionModal