import React from 'react';
import {
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerIngrSub.module.css'
import {State} from "../../redux/types/ingridientTypes";
import {useDrag} from "react-dnd";


interface Props {
    props?: React.ReactNode
    state: Array<State>
    getIdIngredients: Function

}

const BurgerIngSub: React.FC<Props> = ({
                                           state,
                                           getIdIngredients
                                       }) => {

    const [, dragRef] = useDrag({
        type: "ing",

    })


    const getId: React.ReactEventHandler = (e) => {
        getIdIngredients(e.currentTarget.id)

    }

    const component = state?.map((el: State) => (


        <div key={el._id} className={styles.component}>
            <div className={styles.componentImage}>
                <button ref={dragRef}  onClick={getId} id={`${el._id}|picture`} className={styles.currencyIconButton}><img
                    src={el.image}
                    alt={''}/>
                </button>
            </div>

            <div className={styles.componentPrice}>{el.price} <CurrencyIcon type={'primary'}/></div>
            <button onClick={getId} id={`${el._id}|name`} itemID={'name'}
                    className={styles.componentText}>{el.name}</button>


        </div>

    ))

    return (
        <div className={styles.componentMain}>
            {component}
        </div>
    )
}


export default BurgerIngSub