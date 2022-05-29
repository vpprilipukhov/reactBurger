import {FETCH_TODOS, OFF_MODAL, ON_MODAL} from "../reduxTools/types";
import {actionTypes} from "../../tools/types";

interface activeType {
    activeModal: boolean,

}

const activeModal: activeType = {
    activeModal: false
}

interface IChangeFilterAction {
    type: typeof FETCH_TODOS,
    payload: any
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

        case FETCH_TODOS:
            console.log('12343214325')
            return state;

        default:
            return state;


    }

}


