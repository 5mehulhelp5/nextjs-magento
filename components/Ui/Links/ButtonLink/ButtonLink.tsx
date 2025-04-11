'use client'
import Link from 'next/link'
import styles from './buttonLink.module.scss'

interface ButtonLinkPropsType{
    title:string,
    url:string,
    onClick?:()=>void;
}


const ButtonLink=({title,url,onClick}:ButtonLinkPropsType)=>{

    return <Link onClick={onClick} className={styles.button} href={url}>{title}</Link>
}

export default ButtonLink