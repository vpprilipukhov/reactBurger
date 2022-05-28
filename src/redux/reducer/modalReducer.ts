import {Action} from 'redux'
import {OFF_MODAL, ON_MODAL} from "../reduxTools/types";

interface activeType {
    activeModal: false
}

const activeModal: activeType = {
    activeModal: false
}


export const modalReducer = (state: activeType = activeModal, action: Action) => {
    switch (action.type) {
        case ON_MODAL:

            return {
                ...state,
                activeModal: true
            }

        case OFF_MODAL:
            return {
                ...state,
                activeModal: false
            }

        default:
            return state;


    }

}


