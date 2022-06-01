import {Dispatch} from "redux";
import axios from "axios";
import {ComponentAction, ComponentActionTypes} from "./types";

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
