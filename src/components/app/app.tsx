import React, {FC} from 'react';

import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import ModalApp from "../modal/modalApp";
import {State} from "../../redux/types/ingridientTypes";
import {fetchIngredient} from "../../redux/action/ingridientAction";
import styles from './app.module.css'
import {useAppDispatch, useAppSelector} from "../../services/hooks/redux";
import {modalSlice} from "../../redux/reducer/modalReducer";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


const App: FC = () => {

    const [stateChoice, setStateChoice] = React.useState<State[]>([])
    const [coast, setCoast] = React.useState<number>(0)

    const [activeModalName, setActiveModalName] = React.useState<string>('')
    const [ing, setIng] = React.useState<State | undefined>(undefined)

    const {ingridient,} = useAppSelector(state => state.ingridientReducer)


    const {onModal} = modalSlice.actions
    const dispatch = useAppDispatch()

    React.useEffect(
        () => {

            dispatch(fetchIngredient())

        }, [ingridient]
    )


    const getIdOrder = () => {
        setActiveModalName('order')
        dispatch(onModal())
    }

    const getIdIngredients = (id: string) => {

        const idEl: string = id.split('|')[0]
        const type: string = id.split('|')[1]

        // при нажатии на имя - идет добавление в конструктор. Обработка разных варинтов (к примеру 2 булки)
        if (type === 'name') {


            const el = ingridient.filter(el => el._id === idEl)
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
                alert('Вы уже выбрали такую булочку!')

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
            const el: State[] = ingridient.filter(el => el._id === idEl)

            setIng(el[0])
            setActiveModalName('ing')
            dispatch(onModal())
        }

    }

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

                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients getIdIngredients={getIdIngredients} state={ingridient}/>
                    <BurgerConstructor getIdOrder={getIdOrder} dell={dell} stateChoice={stateChoice} coast={coast}/>
                </DndProvider>

            </div>

        </div>
    );
}

export default App;
