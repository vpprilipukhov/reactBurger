import {combineReducers} from "redux";
import {modalReducer} from "./reducer/modalReducer";
import {userReducer} from "./test/userReducer";



export const rootReducer = combineReducers({
    modalReducer,
    userReducer
})


export type RootState = ReturnType<typeof rootReducer>