import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface modalType {
    activeModal: boolean
}

const initialState: modalType = {
    activeModal: false
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
        }
    }

})


export default modalSlice.reducer