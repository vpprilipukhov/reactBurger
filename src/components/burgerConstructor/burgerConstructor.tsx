import React from 'react';
import styles from './burgerConstructor.module.css'

import {
    CurrencyIcon,
    DragIcon,
    LockIcon,
    DeleteIcon, Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {State} from "../../redux/types/ingridientTypes";



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
            <div className={styles.choiceComponentFilling}>
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
                        <Button  onClick={get}  type="primary" size="large">
                            <span
                                className={styles.txtBut}>Оформить заказ</span>
                        </Button>
                    </div>


                </div>
            </div>

        </div>
    )

}

export default BurgerConstructor