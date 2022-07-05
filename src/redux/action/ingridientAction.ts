// import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {State} from "../../auxiliary/types/ingridientTypes"; //apiIngridient,
import {AppDispatch} from "../setupStore";
import {ingridientSlice} from "../reducer/ingridientReducer";
import {modalSlice, orderPostType} from "../reducer/modalReducer";

// export const fetchIngredient = createAsyncThunk(
//     'fetchIngredient',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<apiIngridient>('https://norma.nomoreparties.space/api/ingredients')
//             return response.data.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue("Произошла ошибка при загрузке ингридиетов")
//         }
//     }
// )

// я не знаю как сделать пропурку, как необходимо((
export const fetchIngredient = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(ingridientSlice.actions.ingridientFetching())
        const response = await axios.get<{ success: string, data: State[] }>('https://norma.nomoreparties.space/api/ingredients')
        dispatch(ingridientSlice.actions.ingridientFetchingSuccess(response.data.data))
    } catch (e) {
        dispatch(ingridientSlice.actions.ingridientFetchingError(e.message))
    }

}

// export const addOrderId = (idIngridient: { 'ingredients': Array<string> }) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(modalSlice.actions.orderFetching())
//         console.log(idIngridient)
//         const response = await axios.post< {success: string, message: orderPostType}>('https://norma.nomoreparties.space/api/orders', JSON.stringify({
//             "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
//         }) )
//
//         dispatch(modalSlice.actions.orderFetchingSuccess(response.data.message))
//     } catch (e) {
//         dispatch(modalSlice.actions.orderFetchingError(e.message))
//         console.log(e.message)
//     }
//
// }

export const addOrderId = () => {
    return (dispatch: AppDispatch) => {
        axios.post('https://norma.nomoreparties.space/api/orders', JSON.stringify({
            "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
         }))
            .then(response => {
                dispatch(modalSlice.actions.orderFetchingSuccess(response.data.message))
            })
            .catch(error => {
                dispatch(modalSlice.actions.orderFetchingError(error.message))
            });
    }
}