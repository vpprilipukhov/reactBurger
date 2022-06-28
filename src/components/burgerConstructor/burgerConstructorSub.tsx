import React, {useRef} from "react";
import styles from "./burgerConstructor.module.css";
import {CurrencyIcon, DeleteIcon, DragIcon, LockIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {StateChoice} from "../../redux/types/ingridientTypes";
import {ingridientChoiceSlice} from "../../redux/reducer/ingridientChoiceReducer";
import {useAppDispatch, useAppSelector} from "../../services/hooks/redux";
import {useDrag, useDrop} from "react-dnd";


interface Props {
    props?: React.ReactNode
    state: StateChoice
    index: number

    position?: string
}


export const BurgerConstructorSub: React.FC<Props> = ({position, state, index}) => {


    const {dell, moveChoice} = ingridientChoiceSlice.actions
    const dispatch = useAppDispatch()


    const ref = useRef()

    const [, drop] = useDrop({
        accept: 'SORT_INGREDIENT',
        hover: (item, monitor) => {

            // @ts-ignore
            const dragIndex = item.index
            const hoverIndex = index
            dispatch(moveChoice({dragIndex, hoverIndex}))
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: "SORT_INGREDIENT",
        item: () => {
            return { index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;

    drag(drop(ref))


    // просто вызов

    const dellItem = (e: { currentTarget: { id: string; }; }) => {
        dispatch(dell(e.currentTarget.id))

    }


    const isBun = state.type === 'bun'
    const style = !isBun ? styles.choiceComponentInner : position === 'top' ? styles.choiceComponentInnerTop : styles.choiceComponentInnerBot


    return (
        <div style={{opacity}}>
            {isBun &&
                <div key={state.newId} className={styles.choiceComponent}>
                    <div className={styles.dragIcon}/>
                    <div className={style}>
                        <div className={styles.choiceComponentImage}><img src={state.image} alt={''}
                                                                          className={styles.choiceComponentImageImage}/>
                        </div>
                        <div className={styles.choiceComponentText}>{state.name}</div>
                        <div className={styles.choiceComponentPrice}>{state.price} <CurrencyIcon type={'primary'}/>
                        </div>
                        <div className={styles.choiceLock}>
                            <LockIcon type={'secondary'}/>
                        </div>
                    </div>
                </div>
            }

            {!isBun &&
                // @ts-ignore
                <div ref={ref} key={state.newId} className={styles.choiceComponent}>
                    <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
                    <div className={style}>
                        <div className={styles.choiceComponentImage}><img src={state.image} alt={''}
                                                                          className={styles.choiceComponentImageImage}/>
                        </div>
                        <div className={styles.choiceComponentText}>{state.name}</div>
                        <div className={styles.choiceComponentPrice}>{state.price} <CurrencyIcon type={'primary'}/>
                        </div>
                        <button id={state._id} onClick={dellItem} className={styles.choiceComponentDell}>
                            <DeleteIcon type={'primary'}/>
                        </button>
                    </div>
                </div>
            }
        </div>
    )


}