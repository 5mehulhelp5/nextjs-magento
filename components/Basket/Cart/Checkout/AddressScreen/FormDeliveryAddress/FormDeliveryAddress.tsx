'use client'
import { ChangeEvent, useState } from 'react'
import styles from './formDeliveryAddress.module.scss'
import Logo from '@/public/assets/logo/ATZM_new_logo.svg'

interface FormDeliveryAddressPropsType{
    showForm:boolean
}


const FormDeliveryAddress=({showForm}:FormDeliveryAddressPropsType)=>{
const [formData,setFormData] = useState({
firstname:{
    error:{
        status:false,
        message:""
    },
    value:""
},
lastname:{
    error:{
        status:false,
        message:""
    },
    value:""
},
country_code:{
    error:{
        status:false,
        message:""
    },
    value:""
},
street:{
    error:{
        status:false,
        message:""
    },
    value:""
},
postcode:{
    error:{
        status:false,
        message:""
    },
    value:""
},
city:{
    error:{
        status:false,
        message:""
    },
    value:""
},
email:{
    error:{
        status:false,
        message:""
    },
    value:""
},
telephone:{
    error:{
        status:false,
        message:""
    },
    value:""
},
})

const firstnameOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
setFormData((prevState=>({...prevState,firstname:{
    ...prevState.firstname,value:e.target.value
}})))
}
const lastnameOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    setFormData((prevState=>({...prevState,lastname:{
        ...prevState.lastname,value:e.target.value
    }})))
    }
const streetOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setFormData((prevState=>({...prevState,street:{
            ...prevState.street,value:e.target.value
        }})))
        }
        const postcodeOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
            setFormData((prevState=>({...prevState,postcode:{
                ...prevState.postcode,value:e.target.value
            }})))
            }
            const cityOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
                setFormData((prevState=>({...prevState,city:{
                    ...prevState.city,value:e.target.value
                }})))
                }
                const emailOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
                    setFormData((prevState=>({...prevState,email:{
                        ...prevState.email,value:e.target.value
                    }})))
                    }
                    const telephoneOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
                        setFormData((prevState=>({...prevState,telephone:{
                            ...prevState.telephone,value:e.target.value
                        }})))
                        }
if(showForm){
    return <div className={styles.container}>
    <h2>Adres do wysyłki</h2>
    <form className={styles.form}>
        <div className={styles.rowBox}>
        <div className={styles.inputBox}>
        <label htmlFor='firstname'>IMIĘ</label>
        <input name='firstname' onChange={(e)=>firstnameOnChangeHandler(e)} value={formData.firstname.value} minLength={3} type='text'/>
    </div>
    <div className={styles.inputBox}>
        <label htmlFor='lastname'>NAZWISKO</label>
        <input name='lastname'  onChange={(e)=>lastnameOnChangeHandler(e)} value={formData.lastname.value} minLength={3} type='text'/>
    </div>
        </div>
        <div className={styles.inputBox}>
        <label htmlFor='country_code'>KRAJ</label>
        <input name='country_code' value="POLSKA" disabled type='text'  />
    </div>
    <div className={styles.inputBox}>
        <label htmlFor='street'>ADRES</label>
        <input name='street'  onChange={(e)=>streetOnChangeHandler(e)} value={formData.street.value} type='text'/>
    </div>
    <div className={styles.rowBox}>
        <div className={styles.inputBox}>
        <label htmlFor='postcode'>KOD POCZTOWY</label>
        <input name='postcode'  onChange={(e)=>postcodeOnChangeHandler(e)} value={formData.postcode.value} type='text'/>
    </div>
    <div className={styles.inputBox}>
        <label htmlFor='city'>MIEJSCOWOŚĆ</label>
        <input name='city'  onChange={(e)=>cityOnChangeHandler(e)} value={formData.city.value} type='text'/>
    </div>
        </div>
        <div className={styles.rowBox}>
        <div className={styles.inputBox}>
        <label htmlFor='email'>E-MAIL</label>
        <input name='email'  onChange={(e)=>emailOnChangeHandler(e)} value={formData.email.value} type='email'/>
    </div>
    <div className={styles.inputBox}>
        <label htmlFor='telephone'>TELEFON</label>
        <input name='telephone'  onChange={(e)=>telephoneOnChangeHandler(e)} value={formData.telephone.value} type='tel'/>
    </div>
        </div>
    </form>
</div>
}
  return <div className={styles.container}><div className={styles.logoBox}>
    <img src={Logo.src}/>
  </div> </div>
}

export default FormDeliveryAddress