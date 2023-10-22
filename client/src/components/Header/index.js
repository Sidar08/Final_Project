import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import CartIcon from '../CartIcon'
import FavoritesIcon from '../FavoritesIcon'
import styles from './Header.module.scss'
import MenuIcon from '../MenuIcon'
import CloseBtnIcon from '../CloseBtnIcon'
import {useDispatch, useSelector} from 'react-redux'
import {
    resetStatus,
    resetData,
} from '../../Redux/reducers/userReducers'
import IconLogin from "../IconLogin";
import LogOutIcon from "../LogOutIcon";
import NavContainer from "../NavContainer";
import {setAuthToken} from "../Token";

export default function Header() {
    const status = useSelector((state) => state.store.user.status)
    const [isMenuHidden, setIsMenuHidden] = useState(true)
    const dispatch = useDispatch()

    const toggleHideItems = () => {
        setIsMenuHidden(!isMenuHidden)
    }

    const logOutUser = () => {
        dispatch(resetStatus())
        dispatch(resetData())
        setAuthToken(false)
    }

    console.log(status)
    return (
        <header className={styles.headerContainer}>
            <div className={styles.topMenu}>
                <NavLink className={styles.logoLink} to="/">
                    <span className={styles.logo}>Avion</span>
                </NavLink>
                <span className={styles.icons}>
                    <NavLink className={styles.icon} to="/favorites/">
                        <FavoritesIcon/>
                    </NavLink>
                    <NavLink className={styles.icon} to="/cart/">
                        <CartIcon/>
                    </NavLink>
                </span>
                {status &&
                    <NavLink onClick={logOutUser} className={styles.iconAuth} to="/login/">
                        <LogOutIcon/>
                    </NavLink>
                }
                {!status &&
                    <NavLink className={styles.iconAuth} to="/login/">
                        <IconLogin/>
                    </NavLink>}
                <span
                    className={`${styles.iconMenu} ${
                        !isMenuHidden ? styles.iconMenuDisplay : ''
                    }`}
                    onClick={toggleHideItems}
                >
          <MenuIcon/>
        </span>
                <span
                    className={`${styles.iconMenu} ${
                        isMenuHidden ? styles.iconMenuDisplay : ''
                    }`}
                    onClick={toggleHideItems}
                >
          <CloseBtnIcon/>
        </span>
            </div>
            <NavContainer isMenuHidden={isMenuHidden}></NavContainer>
        </header>
    )
}
