import React from 'react';
import styles from './burgerConstructor.module.css'
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {State, StateChoice} from "../../redux/types/ingridientTypes";
import {useDrop} from "react-dnd";
import {BurgerConstructorSub} from "./burgerConstructorSub";
import {useAppDispatch, useAppSelector} from "../../auxiliary/hooks/redux";
import {ingridientChoiceSlice} from "../../redux/reducer/ingridientChoiceReducer";
import {modalSlice} from "../../redux/reducer/modalReducer";


interface Props {
    props?: React.ReactNode

}


const BurgerConstructor: React.FC<Props> = () => {


    const ingridient = useAppSelector(state => state.ingridientReducer.ingridient)
    const {coast, ingridientChoice} = useAppSelector(state => state.ingridientChoiceReducer)


    const {onModal, getOrder} = modalSlice.actions
    const {appendIng} = ingridientChoiceSlice.actions
    const dispatch = useAppDispatch()

    const bun: StateChoice | undefined = ingridientChoice.filter(e => e.type === 'bun')[0]


    const handleDrop = (itemId: { id: string }) => {

        let el: State[] = ingridient.filter(el => el._id === itemId.id)

        dispatch(appendIng(el[0]))
    }

    const getIdOrder = () => {
        dispatch(getOrder())
        dispatch(onModal())
    }


    const [, dropTarget] = useDrop({
        accept: "ing",
        drop(itemId) {
            // @ts-ignore
            handleDrop(itemId);
        },
    });

    const get: React.ReactEventHandler = () => {
        getIdOrder()
    }


    const ingridientMap = ingridientChoice.filter(e => e.type !== 'bun').map((e, i) => {
            return (
                <BurgerConstructorSub key={e.newId} index={i} state={e}/>
            )
        }
    )


    return (
        <div ref={dropTarget} className={styles.burgerIngredients}>
            {bun!! && <BurgerConstructorSub state={bun} index={999} key={bun?.newId + 'top'} position={'top'}/>
            }

            <div className={styles.choiceComponentFilling}>
                {ingridientMap}
            </div>
            {bun!! && < BurgerConstructorSub state={bun} index={999} key={bun?.newId + 'bot'} position={'bot'}/>
            }
            <div className={styles.sum}>
                <div className={styles.sumContainer}>
                    <div className={styles.sum2}>
                        <div className={styles.sumNumber}>{coast}</div>
                        <div className={styles.iconSum}><CurrencyIcon type={'primary'}/></div>
                    </div>
                    <div className={styles.b}>
                        <Button onClick={get} type="primary" size="large">
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