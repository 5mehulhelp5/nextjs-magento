'use client'
import styles from './plusMinusButton.module.scss'

interface PlusMinusButtonPropsType {
    value:"+"|"-",
    onClick:()=>void
}

const PlusMinusButton = ({value,onClick}:PlusMinusButtonPropsType) =>{
    return <button onClick={onClick} className={styles.button}>{value}</button>
}

export default PlusMinusButton