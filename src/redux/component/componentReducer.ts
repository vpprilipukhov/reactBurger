import {ComponentAction, ComponentActionTypes, ComponentState} from "./types";




const initialState: ComponentState = {
    component: [],
    loading: false,
    error: null
}

export const componentReducer = (state = initialState, action: ComponentAction): ComponentState => {
    switch (action.type) {
        case ComponentActionTypes.FETCH_COMPONENT:
            return {loading: true, error: null, component: []}
        case ComponentActionTypes.FETCH_COMPONENT_SUCCESS:
            return {loading: false, error: null, component: action.payload}
        case ComponentActionTypes.FETCH_COMPONENT_ERROR:
            return {loading: false, error: action.payload, component: []}
        default:
            return state
    }
}
