import {State} from "../types/ingridientTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchIngredient} from "../action/ingridientAction";

interface ingridientChoiceState {
    ingridientChoice: State[]
    coast: number
}

const initialState: ingridientChoiceState = {
    ingridientChoice: [],
    coast: 0

}


export const ingridientChoiceSlice = createSlice({
    name: 'ingridientChoice',
    initialState,
    reducers: {
        append(state, action: PayloadAction<{arr: State[],id: number}>){



        }

    }
})