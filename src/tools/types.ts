export interface StateR {
    activeModal: boolean
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

export interface PromiseMy {
    success: boolean
    data: any;
}