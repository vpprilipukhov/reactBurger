import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../types/ingridientTypes";
import {v4 as uuid} from "uuid";


export interface modalType {
    activeModal: boolean
    activeModalName: string
    putIngridient: State | undefined
    idOrder: string
}

const initialState: modalType = {
    activeModal: false,
    activeModalName: '',
    putIngridient: undefined,
    idOrder: ''
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
            state.idOrder =  uuid().slice(0,8)
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