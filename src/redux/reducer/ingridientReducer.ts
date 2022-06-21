import {State} from "../types/ingridientTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchIngredient} from "../action/ingridientAction";


interface ingridientState {
    ingridient: State[]
    isLoading: boolean
    error: string
}

const initialState: ingridientState = {
    ingridient: [],
    isLoading: false,
    error: ''
}


export const ingridientSlice = createSlice({
    name: 'ingridient',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchIngredient.fulfilled.type]: (state, action: PayloadAction<State[]>) => {
            state.isLoading = false;
            state.error = ''
            state.ingridient = action.payload
        },
        [fetchIngredient.pending.type]: (state) => {
            state.isLoading = true;

        },
        [fetchIngredient.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload

        }
    }
})

export default ingridientSlice.reducer