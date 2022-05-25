import React from 'react';
import styles from './burgerIngredients.module.css'
import BurgerIngSub from "./burgerIngSub";
import {State} from "../../tools/types";



interface Props {
    props?: React.ReactNode
    state: State[]
    getIdIngredients: Function


}


const BurgerIngredients: React.FC<Props> = ({
                                                state,
                                                getIdIngredients
                                            }) => {

    // const handelStateChoice: React.MouseEventHandler = (e) => {
    //     props.onChange(e)
    // }
    //
    // const getIdIngredients: React.ReactEventHandler = (e) => {
    //     props.getIdIngredients(e)
    // }


    const buns: State[] = state?.filter((e: State) => e.type === 'bun')
    const main: State[] = state?.filter((e: State) => e.type === 'main')
    const sauce: State[] = state?.filter((e: State) => e.type === 'sauce')


    return (
        <div className={styles.burgerIngredients}>
            <div className={styles.header}> Собери бургеры</div>

            <div className={styles.miniMenu}>
                <div> Булки</div>
                <div> Соусы</div>
                <div> Начинки</div>
            </div>
            <div className={styles.blockComponent}>
                <div>
                    <div className={styles.textChoice}>
                        Булки
                    </div>
                    <div>
                        <BurgerIngSub
                            getIdIngredients = {getIdIngredients}
                            state={buns}/>
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Соусы
                    </div>
                    <div>
                        <BurgerIngSub getIdIngredients = {getIdIngredients}
                            state={sauce}/>
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Начинки
                    </div>
                    <div>
                        <BurgerIngSub getIdIngredients={getIdIngredients}
                            state={main}/>
                    </div>

                </div>
            </div>


        </div>
    )

}

export default BurgerIngredients