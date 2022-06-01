import React from 'react';
import styles from './appHeader.module.css'
import {Link} from "react-router-dom";

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
}
    from '@ya.praktikum/react-developer-burger-ui-components'


function AppHeader() {


    return (
        <header className={styles.appHeader}>
            <div className={styles.appHeaderSection1}>
                <Link to={'/'}> <div className={styles.appHeaderIcon}><BurgerIcon type={'primary'}/>Конструктор</div></Link>
                <div className={styles.appHeaderIcon}><ListIcon type={'secondary'}/>Лента заказов</div>
            </div>
            <div className={styles.appHeaderSection2}>
                <div><Logo/></div>
            </div>
            <div className={styles.appHeaderSection3}>
                <Link to={'/input'}><div className={styles.appHeaderIcon}><ProfileIcon type={'secondary'}/> Личный кабинет</div></Link>

            </div>
        </header>
    )

}

export default AppHeader