'use client'
import { useAppSelector } from '@/redux/hooks'
import styles from './menu.module.scss'
import Link from 'next/link'
import CloseButton from '@/components/Ui/Buttons/CloseButton/CloseButton'

interface NavigationMenuPropsType{
    showMenu:boolean,
    hideMenu:()=>void
}

const NavigationMenu = ({showMenu,hideMenu}:NavigationMenuPropsType)=>{
if(!showMenu)return null
    return (<div className={styles.container} onClick={hideMenu}>
        <div className={styles.headerBox}>
            <CloseButton onClick={hideMenu} color='grey'/>
        </div>
        <nav className={styles.listBox}>
            <Link className={styles.link} href="/">Strona główna</Link>
            <Link className={styles.link} href="/produkty">Produkty</Link>
            <Link className={styles.link} href="/produkty/swetry">Swetry</Link>
            <Link className={styles.link} href="/produkty/torebki">Torebki</Link>
             </nav>


    </div>)
}

export default NavigationMenu