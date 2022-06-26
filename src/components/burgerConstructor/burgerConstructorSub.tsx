    import React, {useRef} from "react";
    import styles from "./burgerConstructor.module.css";
    import {CurrencyIcon, DeleteIcon, DragIcon, LockIcon} from "@ya.praktikum/react-developer-burger-ui-components";
    import { StateChoice} from "../../redux/types/ingridientTypes";
    import {ingridientChoiceSlice} from "../../redux/reducer/ingridientChoiceReducer";
    import {useAppDispatch, useAppSelector} from "../../services/hooks/redux";
    import {useDrag, useDrop} from "react-dnd";


    interface Props {
        props?: React.ReactNode
        state: StateChoice
        index: number
        moveStateChoice: Function
        position?: string
    }


    export const BurgerConstructorSub: React.FC<Props> = ({position, moveStateChoice, state, index}) => {


        const {dell} = ingridientChoiceSlice.actions
        const dispatch = useAppDispatch()

        const [, dragRef] = useDrag({
            type: 'item',
            item: {index},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        })


        const [, dropRef] = useDrop({
            accept: 'item',
            hover: (item, monitor) => {
                // @ts-ignore
                const dragIndex = item.index
                const hoverIndex = index
                // @ts-ignore
                const hoverBoundingRect = ref.current?.getBoundingClientRect()
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
                // @ts-ignore
                const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top
                if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
                if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

                moveStateChoice(dragIndex, hoverIndex)
                // @ts-ignore
                item.index = hoverIndex
            },
        })


        const ref = useRef(null)
        const dragDropRef = dragRef(dropRef(ref))


        const dellItem = (e: { currentTarget: { id: string; }; }) => {
            dispatch(dell(e.currentTarget.id))

        }

        const isBun = state.type === 'bun'
        const style = !isBun ? styles.choiceComponentInner : position === 'top' ? styles.choiceComponentInnerTop : styles.choiceComponentInnerBot


        return (
            <div>
                {isBun &&
                    // @ts-ignore
                    <div key={state.newId} className={styles.choiceComponent}>
                        <div className={styles.dragIcon}><DragIcon type={'primary'}/></div>
                        <div className={style}>
                            <div className={styles.choiceComponentImage}><img src={state.image} alt={''}
                                                                              className={styles.choiceComponentImageImage}/>
                            </div>
                            <div className={styles.choiceComponentText}>{state.name}</div>
                            <div className={styles.choiceComponentPrice}>{state.price} <CurrencyIcon type={'primary'}/>
                            </div>
                            <button id={state._id} className={styles.choiceComponentDell}>

                            </button>
                        </div>
                    </div>
                }

                {!isBun &&
                    // @ts-ignore
                    <div ref={dragDropRef} key={state.newId} className={styles.choiceComponent}>
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