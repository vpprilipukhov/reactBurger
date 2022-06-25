import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../types/ingridientTypes";


export interface modalType {
    activeModal: boolean
    activeModalName: string
    putIngridient: State | undefined
}

const initialState: modalType = {
    activeModal: false,
    activeModalName: '',
    putIngridient: undefined
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onModal(state){
            state.activeModal = true
        },

        offModal(state){ //, action: PayloadAction<string>
            state.activeModal = false
        },

        getOrder(state){
            state.activeModalName = 'order'
        },

        getIng(state){
            state.activeModalName = 'ing'
        },

        putIngridient(state,  action: PayloadAction<State>){
            state.putIngridient = action.payload
        }
    }

})


export default modalSlice.reducer