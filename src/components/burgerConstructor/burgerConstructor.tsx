import React, {Factory} from 'react';
import styles from './burgerConstructor.module.css'

import {
    CurrencyIcon,
    DragIcon,
    LockIcon,
    DeleteIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {fchmod} from "fs";

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
    stateChoice: State[]
    dell: Function
    coast: number
    getIdOrder: Function

}

const BurgerConstructor: React.FC<Props> = ({
                                                stateChoice,
                                                dell,
                                                coast,
                                                getIdOrder
                                            }) => {

    const dellItem: React.ReactEventHandler = (e) => {
        dell(e.currentTarget.id)
    }

    const get: React.ReactEventHandler = () => {
        getIdOrder()
    }


    const choiceBunTop = stateChoice?.filter((el: State) => el.type === "bun").map((el: State, index: React.Key | null | undefined) => (

        <div key={index} className={styles.choiceComponent}>
            <div className={styles.dragIcon}/>
            <div className={styles.choiceComponentInnerTop}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <div className={styles.choiceComponentDell}><LockIcon type={'secondary'}/></div>
            </div>


        </div>
    ))

    const choiceBunBot = stateChoice?.filter((el: State) => el.type === "bun").map((el: State, index: React.Key | null | undefined) => (

        <div key={index} className={styles.choiceComponent}>
            <div className={styles.dragIcon}/>
            <div className={styles.choiceComponentInnerBot}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <div className={styles.choiceComponentDell}><LockIcon type={'secondary'}/></div>
            </div>


        </div>
    ))


    const choice = stateChoice?.filter((el: State) => el.type !== "bun").map((el: State, index: React.Key | null | undefined) => (
        <div key={index} className={styles.choiceComponent}>
            <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
            <div className={styles.choiceComponentInner}>
                <div className={styles.choiceComponentImage}><img src={el.image} alt={''}
                                                                  className={styles.choiceComponentImageImage}/></div>
                <div className={styles.choiceComponentText}>{el.name}</div>
                <div className={styles.choiceComponentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
                <button id={el._id} onClick={dellItem} className={styles.choiceComponentDell}>
                    <DeleteIcon
                        type={'primary'}/>
                </button>
            </div>


        </div>


    ))

    return (
        <div className={styles.burgerIngredients}>
            {choiceBunTop}
            <div className={`${styles.choiceComponentFilling} custom-scroll`}>
                {choice}
            </div>
            {choiceBunBot}

            <div className={styles.sum}>
                <div className={styles.sumContainer}>
                    <div className={styles.sum2}>
                        <div className={styles.sumNumber}>{coast}</div>
                        <div className={styles.iconSum}><CurrencyIcon type={'primary'}/></div>
                    </div>
                    <div className={styles.b}>
                        <button onClick={get} className={styles.but}><span
                            className={styles.txtBut}>Оформить заказ</span></button>
                    </div>


                </div>
            </div>

        </div>
    )

}

export default BurgerConstructor