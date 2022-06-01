import { OFF_MODAL, ON_MODAL} from "../redux/reduxTools/types";



export interface State {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number


}

export interface PromiseMy {
    success: boolean
    data: any;
}


interface onModalAC{
    type: typeof ON_MODAL
    payload: any[]
}

interface offModal{
    type: typeof OFF_MODAL
    payload: any[]
}


export type TaskActionTypes = onModalAC | offModal

interface actionModal{
    type: typeof ON_MODAL | typeof OFF_MODAL
}

export type actionTypes = actionModal