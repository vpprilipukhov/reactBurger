import React from 'react';
import ModalOverlay from './modalOverlay/modalOverlay'
import ReactDOM from 'react-dom';
import Modal from "../modal/modal";
import IngredientDetails from "./modalComponents/ingredientDetails/ingredientDetails";
import OrderDetails from "./modalComponents/orderDetails/orderDetails";
import {State} from "../../redux/types/ingridientTypes";
import {useAppSelector} from "../../services/hooks/redux";

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


    const {activeModal} = useAppSelector(state => state.modalReducer)

    React.useEffect(
        () => {
            if (activeModalName === 'ing') {
                setActiveIng(true)

            }
            if (activeModalName === 'order') {
                setActiveOrder(true)

            }
        }, [activeModal, activeModalName]
    )

    React.useEffect(
        () => {
            if (!activeModal) {
                setActiveOrder(false)
                setActiveIng(false)
            }
        }, [activeModal]
    )


    return (

        <main>

            {activeModal &&
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