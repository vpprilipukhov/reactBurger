import React from 'react';
import styles from './burgerIngredients.module.css'
import BurgerIngSub from "./burgerIngSub";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {State} from "../../redux/component/types";


interface Props {
    props?: React.ReactNode

    getIdIngredients: Function


}


const BurgerIngredients: React.FC<Props> = ({

                                                getIdIngredients
                                            }) => {


    const {component, error, loading} = useTypeSelector(state => state.componentReducer)




    const buns: State[] = component?.filter((e: State) => e.type === 'bun')
    const main: State[] = component?.filter((e: State) => e.type === 'main')
    const sauce: State[] = component?.filter((e: State) => e.type === 'sauce')

    const [current, setCurrent] = React.useState<string>('one')

    const onTabClick = (tab: string) => {
        setCurrent(tab);
    };

    // @ts-ignore
    return (
        <div className={styles.burgerIngredients}>
            <div className={styles.header}> Собери бургеры</div>

            <div className={styles.miniMenu}>
                <div style={{display: 'flex'}}>
                    <Tab value="one" active={current === 'one'} onClick={onTabClick}>
                        One
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={onTabClick}>
                        Two
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={onTabClick}>
                        Three
                    </Tab>
                </div>
            </div>
            <div className={styles.blockComponent}>
                <div>
                    <div className={styles.textChoice}>
                        Булки
                    </div>
                    <div>
                        <BurgerIngSub
                            getIdIngredients={getIdIngredients}
                            state={buns}/>
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Соусы
                    </div>
                    <div>
                        <BurgerIngSub getIdIngredients={getIdIngredients}
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