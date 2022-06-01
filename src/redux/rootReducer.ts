import {combineReducers} from "redux";
import {modalReducer} from "./modal/modalReducer";
import {componentReducer} from "./component/componentReducer";




export const rootReducer = combineReducers({
    modalReducer,
    componentReducer
})


export type RootState = ReturnType<typeof rootReducer>