'use client'
import { ChangeEvent, useState } from 'react'
import styles from './formBillingAddress.module.scss'

interface FormBillingAddressPropsType{
    deliveryAddressSameAsBilling:boolean,
    onDeliveryAddressSameAsBilling:(deliveryAddressSameAsBilling:boolean)=>void;
    onDeliveryAddressDiffAsBilling:()=>void;
}


const FormBillingAddress=({deliveryAddressSameAsBilling,onDeliveryAddressDiffAsBilling,onDeliveryAddressSameAsBilling}:FormBillingAddressPropsType)=>{

    const [checkBox,setCheckBox]=useState(true)
const [formData,setFormData] = useState({
firstname:{
    error:{
        status:false,
        message:""
    },
    value:""
},
secondname:{
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

const switchStyles = `${styles.switch} ${deliveryAddressSameAsBilling&&styles.checked}`

const firstnameOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
setFormData((prevState=>({...prevState,firstname:{
    ...prevState.firstname,value:e.target.value
}})))
}
const secondnameOnChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    setFormData((prevState=>({...prevState,secondname:{
        ...prevState.secondname,value:e.target.value
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
    return <div className={styles.container}>
        <h2>Dane do płatności</h2>
        <form className={styles.form}>
            <div className={styles.rowBox}>
            <div className={styles.inputBox}>
            <label htmlFor='firstname'>IMIĘ</label>
            <input name='firstname' onChange={(e)=>firstnameOnChangeHandler(e)} value={formData.firstname.value} minLength={3} type='text'/>
        </div>
        <div className={styles.inputBox}>
            <label htmlFor='secondname'>NAZWISKO</label>
            <input name='secondname'  onChange={(e)=>secondnameOnChangeHandler(e)} value={formData.secondname.value} minLength={3} type='text'/>
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
        <div style={{display:'flex',gap:'1rem'}}>
            <button className={switchStyles} onClick={()=>onDeliveryAddressSameAsBilling(deliveryAddressSameAsBilling)}>
<span className={styles.circle}></span>
        </button>
        <label htmlFor='billingAdressSameAsDelivery'>Adres dostawy taki sam jak płatności</label></div>
    
    </div>
}

export default FormBillingAddress