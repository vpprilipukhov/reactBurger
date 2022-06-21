import {AppDispatch} from "../setupStore";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {apiIngridient, State} from "../types/ingridientTypes";

export const fetchIngredient = createAsyncThunk(
    'fetchIngredient',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<apiIngridient>('https://norma.nomoreparties.space/api/ingredients')
            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Произошла ошибка при загрузке ингридиетов")
        }
    }
)
