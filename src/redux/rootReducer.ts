import {combineReducers} from "@reduxjs/toolkit"

import ingridientReducer from "./reducer/ingridientReducer";
import modalReducer from "./reducer/modalReducer";



export const rootReducer = combineReducers({

    ingridientReducer,
    modalReducer

})


export type RootState = ReturnType<typeof rootReducer>