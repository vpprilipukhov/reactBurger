import {FETCH_TODOS, OFF_MODAL, ON_MODAL} from "../reduxTools/types";


interface activeType {


}

const stateM: Array<any> | undefined = [
    [undefined]

]



// @ts-ignore
export const users = (state = stateM, action: IChangeFilterAction): any => {
    console.log(action)
    if (action.type === FETCH_TODOS) {
        console.log(action.payload)
        return state;
    } else {
        return state;
    }

}
