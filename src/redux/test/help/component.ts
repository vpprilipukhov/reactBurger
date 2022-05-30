import {Dispatch} from "redux";
import axios from "axios";

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
export enum ComponentActionTypes {
    FETCH_COMPONENT = 'FETCH_COMPONENT',
    FETCH_COMPONENT_SUCCESS = 'FETCH_COMPONENT_SUCCESS',
    FETCH_COMPONENT_ERROR = 'FETCH_COMPONENT_ERROR',
}

interface FetchComponentAction {
    type: ComponentActionTypes.FETCH_COMPONENT;

}
interface FetchComponentSuccessAction {
    type: ComponentActionTypes.FETCH_COMPONENT_SUCCESS;
    payload: any[]
}
interface FetchComponentErrorAction {
    type: ComponentActionTypes.FETCH_COMPONENT_ERROR;
    payload: string;
}
export type ComponentAction = FetchComponentAction | FetchComponentSuccessAction | FetchComponentErrorAction


export const fetchComponent = () => {
    return async (dispatch: Dispatch<ComponentAction>) => {
        try {
            dispatch({type: ComponentActionTypes.FETCH_COMPONENT})
            const response = await axios.get('https://norma.nomoreparties.space/api/ingredients')
            setTimeout(() => {
                dispatch({type: ComponentActionTypes.FETCH_COMPONENT_SUCCESS, payload: response.data.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: ComponentActionTypes.FETCH_COMPONENT_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}



