import React, {FC} from 'react';
import styles from './app.module.css'
import AppHeader from "../appHeader/appHeader";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import ModalOverlay from "../modal/modalOverlay/modalOverlay";
import {State, PromiseMy} from "../../tools/types";
import ReactDOM from 'react-dom';
import Modal from "../modal/modal";
import IngredientDetails from "../modal/modalComponents/ingredientDetails/ingredientDetails";

interface ErrorTS {
    data: string
    message: string
}

async function getState(url: string): Promise<PromiseMy> {
    const response = await fetch(url, {method: 'GET'})

    return response.json()
}

const App: FC = () => {

    //получение данных
    const url: string = 'https://norma.nomoreparties.space/api/ingredients'
    const [state, setState] = React.useState<State[]>([])
    const [error, setError] = React.useState<ErrorTS | undefined>()

    //список с выбранными ингридиентами
    const [stateChoice, setStateChoice] = React.useState<State[]>([])
    //стоимость выбранных ингридиетов
    const [coast, setCoast] = React.useState<number>(0)

    //переменные модальных окон.
    const [activeModal, setActiveModal] = React.useState<boolean>(false)
    const [activeModalName, setActiveModalName] = React.useState<string>('')
    const [ing, setIng] = React.useState<State | undefined>(undefined)

    React.useEffect(
        () => {
            getState(url)
                .then(data => setState(data.data))
                .catch(e => setError(e.message))
            error && console.log(error)
        },
        []
    )


    //функция, получает событие клик на оформить заказ
    const getIdOrder = () => {
        setActiveModalName('order')
        setActiveModal(true)
    }

    //функция, получает id ри нажатии на ингридиет. в зависимости, куда нажали - разные действия
    const getIdIngredients = (id: string) => {

        const idEl: string = id.split('|')[0]
        const type: string = id.split('|')[1]

        // при нажатии на имя - идет добавление в конструктор. Обработка разных варинтов (к примеру 2 булки)
        if (type === 'name') {


            const el = state.filter(el => el._id === idEl)
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
            const el: State[] = state.filter(el => el._id === idEl)

            setIng(el[0])
            setActiveModalName('ing')
            setActiveModal(true)
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

    const setActiveModalFUNC = (fl: boolean) => {
        setActiveModal(fl)
    }


    return (
        <div className={styles.page}>
            <main>


                {activeModal &&
                    ReactDOM.createPortal(
                        <div>
                            <ModalOverlay activeFunc={setActiveModal}/>
                            <Modal activeFunc={setActiveModal}><IngredientDetails ing={ing}/></Modal>
                        </div>,
                        document.getElementById('portal') as HTMLElement
                    )}


            </main>

            <div className={styles.app_wrapper}>

                <AppHeader/>
                <BurgerIngredients getIdIngredients={getIdIngredients} state={state}/>
                <BurgerConstructor getIdOrder={getIdOrder} dell={dell} stateChoice={stateChoice} coast={coast}/>
            </div>

        </div>
    );
}

export default App;
