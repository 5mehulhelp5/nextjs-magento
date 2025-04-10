'use client'
import Link from 'next/link'
import styles from './buttonLink.module.scss'

interface ButtonLinkPropsType{
    title:string,
    url:string
}


const ButtonLink=({title,url}:ButtonLinkPropsType)=>{

    return <Link className={styles.button} href={url}>{title}</Link>
}

export default ButtonLink