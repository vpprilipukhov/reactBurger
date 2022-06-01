import React, {FC} from 'react';
import styles from './app.module.css'
import ModalApp from "../modal/modalApp";
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {onModalAC} from "../../redux/reduxTools/actions";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import Input from "../input/input";

import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import { State} from "../../redux/component/types";
import {fetchComponent} from "../../redux/component/actions";


const App: FC = () => {


    //список с выбранными ингридиентами
    const [stateChoice, setStateChoice] = React.useState<Array<State>>([])
    //стоимость выбранных ингридиетов
    const [coast, setCoast] = React.useState<number>(0)

    //переменные модальных окон.
    const [activeModalName, setActiveModalName] = React.useState<string>('')
    const [ing, setIng] = React.useState<State | undefined>(undefined)

    const dispatch = useDispatch()

    const {component , error, loading} = useTypeSelector(state => state.componentReducer)


    React.useEffect(
        () => {

            // @ts-ignore
            dispatch(fetchComponent())

        },
        []
    )


    //функция, получает событие клик на оформить заказ
    const getIdOrder = () => {
        setActiveModalName('order')
        console.log(component)
        dispatch(onModalAC())

    }

    //функция, получает id ри нажатии на ингридиет. в зависимости, куда нажали - разные действия
    const getIdIngredients = (id: string) => {

        const idEl: string = id.split('|')[0]
        const type: string = id.split('|')[1]

        // при нажатии на имя - идет добавление в конструктор. Обработка разных варинтов (к примеру 2 булки)
        if (type === 'name') {


            const el = component.filter(el => el._id === idEl)
            let fl_bun: boolean = false,
                id_bun: string = '',
                i_bun: number = 0,
                newArr: any = []

            for (let i = 0; i < stateChoice.length; i++) {
                if (stateChoice[i].type === 'bun') {
                    fl_bun = true
                    id_bun = stateChoice[i]._id
                    i_bun = i
                }
            }

            if (!fl_bun && el[0].type === 'bun') {
                newArr = [...stateChoice, el[0]]
                setStateChoice(newArr)

            } else if (el[0]._id === id_bun) {
                alert('Вы уже выбрали такую булочку!!!')

            } else if (fl_bun && el[0].type === 'bun') {
                newArr = stateChoice
                newArr[i_bun] = el[0]
                newArr = [...newArr]
                setStateChoice(newArr)

            } else {
                newArr = [...stateChoice, el[0]]
                setStateChoice(newArr)
            }
        }

        if (type === 'picture') {
            const el: State[] = component.filter(el => el._id === idEl)

            setIng(el[0])
            setActiveModalName('ing')
            dispatch(onModalAC())
        }

    }

    // функция по удалению ингридиентов из выбранного списка
    const dell = (id: string) => {

        let i_id: number = 0

        for (let i: number = 0; i < stateChoice.length; i++) {
            if (stateChoice[i]._id === id) {
                i_id = i
                break
            }

        }
        let newArr: any = stateChoice

        newArr.splice(i_id, 1)
        setStateChoice([...newArr])
    }

    // оотслеживаем изменения выбранного списка ингридиентов. При добавлении продуктов в выбор, изменяем ценну
    React.useEffect(
        () => {

            let costNew: number = 0
            for (let i = 0; i < stateChoice.length; i++) {
                costNew += Number(stateChoice[i].price)
            }

            setCoast(costNew)


        }, [stateChoice]
    )


    return (
        <div className={styles.page}>
            <ModalApp activeModalName={activeModalName} ing={ing}/>


            <div className={styles.app_wrapper}>
                <AppHeader/>

                <Routes>
                    <Route path={'/'} element={
                        <div className={styles.constr}>
                            <BurgerIngredients getIdIngredients={getIdIngredients}/>
                            <BurgerConstructor getIdOrder={getIdOrder} dell={dell} stateChoice={stateChoice}
                                               coast={coast}/>
                        </div>}/>

                    <Route path={'/input'} element={<Input/>}/>
                </Routes>


            </div>

        </div>
    );
}

export default App;
