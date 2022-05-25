import React from "react";
import styles from './modal.module.css'
import {
    CloseIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'


interface Props {
    children?: React.ReactNode
    activeFunc: Function
    title: string
}

const Modal: React.FC<Props> = ({
                                    title,
                                    activeFunc,
                                    children

                                }) => {

    const off = () => {
        activeFunc(false)
    }


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