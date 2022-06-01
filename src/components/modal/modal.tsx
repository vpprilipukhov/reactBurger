import React from "react";
import styles from './modal.module.css'
import {
    CloseIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {offModalAC} from "../../redux/reduxTools/actions";

//Все изменения внесены, прошу только оставить компонент модал разбитый на 2 файла. Наставник тоже сказал, что такой вариант возможный. Обработку получение api сделаю в redux
interface Props {
    children?: React.ReactNode
    title: string
}

const Modal: React.FC<Props> = ({
                                    title,
                                    children

                                }) => {

    const dispatch = useDispatch()

    const off = () => {
        dispatch(offModalAC())
    }
//Все изменения внесены, прошу только оставить компонент модал разбитый на 2 файла. Наставник тоже сказал, что такой вариант возможный. Обработку получение api сделаю в redux

    return (

        <div className={styles.modalContent}
             onClick={e => e.stopPropagation()}>

            <div className={styles.modalContentIn}>
                <header className={styles.headerMy}>
                    <div className={styles.headerMyText}>
                        {
                            title
                        }</div>
                    <button className={styles.headerMyCloseIcon}
                            onClick={off}>< CloseIcon type={'primary'}/></button>
                </header>

                <div>
                    {children}

                </div>
            </div>

        </div>

    )
}


export default Modal