export enum ComponentActionTypes {
    FETCH_COMPONENT = 'FETCH_COMPONENT',
    FETCH_COMPONENT_SUCCESS = 'FETCH_COMPONENT_SUCCESS',
    FETCH_COMPONENT_ERROR = 'FETCH_COMPONENT_ERROR',
}



export interface State {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number


}



export interface ComponentState {
    component: Array<State>
    loading: boolean,
    error: any
}



interface FetchComponentAction {
    type: ComponentActionTypes.FETCH_COMPONENT;

}
interface FetchComponentSuccessAction {
    type: ComponentActionTypes.FETCH_COMPONENT_SUCCESS;
    payload: any[]
}
interface FetchComponentErrorAction {
    type: ComponentActionTypes.FETCH_COMPONENT_ERROR;
    payload: string;
}
export type ComponentAction = FetchComponentAction | FetchComponentSuccessAction | FetchComponentErrorAction





