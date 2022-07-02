// import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { State} from "../types/ingridientTypes"; //apiIngridient,
import {AppDispatch} from "../setupStore";
import {ingridientSlice} from "../reducer/ingridientReducer";

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
export const fetchIngredient = () => async (dispatch: AppDispatch) =>{
    try {
        dispatch(ingridientSlice.actions.ingridientFetching())
        const response = await axios.get<{ success: string , data: State[] }>('https://norma.nomoreparties.space/api/ingredients')
        dispatch(ingridientSlice.actions.ingridientFetchingSuccess(response.data.data))
    } catch (e) {
        dispatch(ingridientSlice.actions.ingridientFetchingError(e.message))
    }

}