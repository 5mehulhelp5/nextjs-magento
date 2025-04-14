'use client'
import { ChangeEvent, useState } from 'react'
import styles from './formBillingAddress.module.scss'
import { setDeliveryAddress } from '@/components/Api/Cart/checkout';
import { useAppSelector } from '@/redux/hooks';

interface FormBillingAddressPropsType{
    deliveryAddressSameAsBilling:boolean,
    onDeliveryAddressSameAsBilling:(deliveryAddressSameAsBilling:boolean)=>void;
    onDeliveryAddressDiffAsBilling:()=>void;
}


const FormBillingAddress=({deliveryAddressSameAsBilling,onDeliveryAddressDiffAsBilling,onDeliveryAddressSameAsBilling}:FormBillingAddressPropsType)=>{

const cart_id = useAppSelector(state=>state.shoppingCart.cartId)

    const [checkBox,setCheckBox]=useState(true)
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

const switchStyles = `${styles.switch} ${deliveryAddressSameAsBilling&&styles.checked}`

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

const submitHandler = async()=>{
    
    const dataToSend = {
        firstname:formData.firstname.value,
        lastname:formData.lastname.value,
        country_code:formData.country_code.value,
        street:formData.street.value,
        postcode:formData.postcode.value,
        city:formData.city.value,
        email:formData.email.value,
        telephone:formData.telephone.value
    }
    if(cart_id){
        const {firstname,lastname,country_code,street,postcode,city,email,telephone} = dataToSend
        const response = await setDeliveryAddress({cart_id,firstname,lastname,country_code,street,postcode,city,email,telephone})
        const data = response?.data
        console.log(data)
    }
    
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
        <div style={{display:'flex',gap:'1rem'}}>
            <button className={switchStyles} onClick={()=>onDeliveryAddressSameAsBilling(deliveryAddressSameAsBilling)}>
<span className={styles.circle}></span>
        </button>
        <label htmlFor='billingAdressSameAsDelivery'>Adres dostawy taki sam jak płatności</label></div>
    <button onClick={submitHandler}>Submit</button>
    </div>
}

export default FormBillingAddress