import React from 'react';
import ModalOverlay from './modalOverlay/modalOverlay'
import ReactDOM from 'react-dom';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";

import OrderDetails from "../orderDetails/orderDetails";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {State} from "../../redux/component/types";
//Все изменения внесены, прошу только оставить компонент модал разбитый на 2 файла. Наставник тоже сказал, что такой вариант возможный. Обработку получение api сделаю в redux

interface Props {
    props?: React.ReactNode
    ing?: State
    activeModalName: string


}

const ModalApp: React.FC<Props> = ({
                                       ing,
                                       activeModalName
                                   }) => {

    const [activeIng, setActiveIng] = React.useState<boolean>(false)
    const [activeOrder, setActiveOrder] = React.useState<boolean>(false)

    const activeModalRedux = useTypeSelector(state => state.modalReducer.activeModal)

//Все изменения внесены, прошу только оставить компонент модал разбитый на 2 файла. Наставник тоже сказал, что такой вариант возможный. Обработку получение api сделаю в redux
    React.useEffect(
        () => {
            if (activeModalName === 'ing') {
                setActiveIng(true)

            }
            if (activeModalName === 'order') {
                setActiveOrder(true)

            }
        }, [activeModalRedux, activeModalName]
    )
    React.useEffect(
        () => {
            if (!activeModalRedux) {
                setActiveOrder(false)
                setActiveIng(false)
            }
        }, [activeModalRedux]
    )


    return (

        <main>


            {activeModalRedux &&
                ReactDOM.createPortal(
                    <div>
                        <ModalOverlay/>
                        {activeIng && <Modal title={'Детали ингредиента'}><IngredientDetails
                            ing={ing}/></Modal>}
                        {activeOrder && <Modal title={''}><OrderDetails/></Modal>}
                    </div>,
                    document.getElementById('portal') as HTMLElement
                )}


        </main>

    )

}

export default ModalApp