import React from "react";
import {
    CheckMarkIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./orderDetails.module.css"


const OrderDetails: React.FC = () => {

    return (

        <div className={styles.main}>

            <div className={styles.ind}> 117117</div>
            <div className={styles.indText}> идентификатор заказа</div>
            <div className={styles.checkMark}><CheckMarkIcon type={'primary'}/></div>
            <div className={styles.text1}> Ваш заказ начали готовить</div>
            <div className={styles.text2}> Дождитесь готовности на орбитальной станции</div>


        </div>

    )
}


export default OrderDetails