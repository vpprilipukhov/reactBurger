import React from "react";
import styles from './modalOverlay.module.css'

interface State {
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

interface Props {
    props?: React.ReactNode
    activeFunc: Function

}

const ModalOverlay: React.FC<Props> = ({
                                           activeFunc,

                                       }) => {

    const off = () => {
        activeFunc(false)
    }

    return (
        <div className={styles.modal}
             onClick={off}>
        </div>
    )
}


export default ModalOverlay