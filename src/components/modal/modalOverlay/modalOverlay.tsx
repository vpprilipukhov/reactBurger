import React from "react";
import styles from './modalOverlay.module.css'
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {offModalAC, onModalAC} from "../../../redux/reduxTools/actions";

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

}

const ModalOverlay: React.FC<Props> = () => {

    const dispatch = useDispatch()

    const off = () => {
        dispatch(offModalAC())
    }

    return (
        <div className={styles.modal}
             onClick={off}>
        </div>
    )
}


export default ModalOverlay