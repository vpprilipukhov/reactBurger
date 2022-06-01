import {OFF_MODAL, ON_MODAL} from "../reduxTools/types";


interface activeType {
    activeModal: boolean,

}

const activeModal: activeType = {
    activeModal: false
}

interface IChangeFilterAction {
    type: string
}

export const modalReducer = (state: activeType = activeModal, action: IChangeFilterAction): activeType => {
    switch (action.type) {
        case ON_MODAL:

            return {
                activeModal: true
            }

        case OFF_MODAL:
            return {
                activeModal: false
            }

        default:
            return state;


    }

}


