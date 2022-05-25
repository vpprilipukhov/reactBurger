import React from 'react';
import ModalOverlay from './modalOverlay/modalOverlay'
import ReactDOM from 'react-dom';
import Modal from "../modal/modal";
import IngredientDetails from "../modal/modalComponents/ingredientDetails/ingredientDetails";
import {State} from "../../tools/types";
import OrderDetails from "./modalComponents/orderDetails/orderDetails";

interface Props {
    props?: React.ReactNode
    activeModal: boolean
    setActiveModal: Function
    ing?: State
    activeModalName: string


}

const ModalApp: React.FC<Props> = ({
                                       activeModal,
                                       setActiveModal,
                                       ing,
                                       activeModalName

                                   }) => {

    const [activeIng, setActiveIng] = React.useState<boolean>(false)
    const [activeOrder, setActiveOrder] = React.useState<boolean>(false)


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
                        <ModalOverlay activeFunc={setActiveModal}/>
                        {activeIng && <Modal title={'Детали ингредиента'} activeFunc={setActiveModal}><IngredientDetails
                            ing={ing}/></Modal>}
                        {activeOrder && <Modal title={''} activeFunc={setActiveModal}><OrderDetails/></Modal>}
                    </div>,
                    document.getElementById('portal') as HTMLElement
                )}


        </main>

    )

}

export default ModalApp