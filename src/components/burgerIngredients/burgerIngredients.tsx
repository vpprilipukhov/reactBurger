import React from 'react';
import styles from './burgerIngredients.module.css'
import BurgerIngSub from "./burgerIngSub";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {State} from "../../redux/types/ingridientTypes";
import {useAppSelector} from "../../services/hooks/redux";


interface Props {
    props?: React.ReactNode

}


const BurgerIngredients: React.FC<Props> = ({}) => {


    const {ingridient} = useAppSelector(state => state.ingridientReducer)

    const [current, setCurrent] = React.useState<string>('one')


    const ingridientMapBun = ingridient?.filter((e: State) => e.type === 'bun').map((e) => {
            return (
                <BurgerIngSub key={e._id} state={e}/>
            )
        }
    )


    const ingridientMapMain = ingridient?.filter((e: State) => e.type === 'main').map((e) => {
            return (
                <BurgerIngSub key={e._id} state={e}/>
            )
        }
    )


    const ingridientMapSauce = ingridient?.filter((e: State) => e.type === 'sauce').map((e) => {
            return (
                <BurgerIngSub key={e._id} state={e}/>
            )
        }
    )

    const onTabClick = (tab: string) => {
        setCurrent(tab);
    };


    return (
        <div className={styles.burgerIngredients}>
            <div className={styles.header}> Собери бургеры</div>

            <div className={styles.miniMenu}>
                <div style={{display: 'flex'}}>
                    <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={current === 'main'} onClick={onTabClick}>
                        Начинки
                    </Tab>
                </div>
            </div>
            <div className={styles.blockComponent}>
                <div>
                    <div className={styles.textChoice}>
                        Булки
                    </div>
                    <div className={styles.componentMain}>
                        {ingridientMapBun}
                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Соусы
                    </div>
                    <div className={styles.componentMain}>

                        {ingridientMapSauce}

                    </div>
                </div>
                <div>
                    <div className={styles.textChoice}>
                        Начинки
                    </div>
                    <div className={styles.componentMain}>

                        {ingridientMapMain}

                    </div>

                </div>
            </div>


        </div>
    )

}

export default BurgerIngredients