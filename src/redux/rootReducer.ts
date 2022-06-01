import {combineReducers} from "redux";
import {modalReducer} from "./reducer/modalReducer";



export const rootReducer = combineReducers({
    modalReducer,

})


export type RootState = ReturnType<typeof rootReducer>