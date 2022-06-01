import React from "react";
import styles from './modalOverlay.module.css'

import {useDispatch} from "react-redux";
import {offModalAC} from "../../../redux/reduxTools/actions";



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