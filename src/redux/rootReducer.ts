import {combineReducers} from "redux";
import {modalReducer} from "./reducer/modalReducer";
import {componentReducer} from "./test/componentReducer";


export const rootReducer = combineReducers({
    modalReducer,
    componentReducer
})


export type RootState = ReturnType<typeof rootReducer>