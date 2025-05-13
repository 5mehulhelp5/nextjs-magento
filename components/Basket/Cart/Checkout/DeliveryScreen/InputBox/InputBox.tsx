'use client'
import { DeliveryMethodType, setSelectedDeliveryMethod } from '@/redux/shopping-cart-slice'
import styles from './inputBox.module.scss'
import InpostKurierIcon from '@/public/assets/delivery/icons/InpostcourierIcon.svg'
import InpostPaczkomatIcon from '@/public/assets/delivery/icons/InpostpaczkomatIcon.svg'
import InpostDefaultIcon from '@/public/assets/delivery/icons/InpostdefaultIcon.svg'
import { useState } from 'react'
import { InpostGeoWidget } from '../InpostGeoWidget/InpostGeoWidget'
import { setDeliveryMethod } from '@/components/Api/Cart/checkout'
import { useAppDispatch } from '@/redux/hooks'
const DELIVERY_ICONS = {
  inpostcourier:InpostKurierIcon,
  inpostlocker:InpostPaczkomatIcon
}

interface InputBoxPropsType {
    data:DeliveryMethodType,
    onSelectHandler:(item:DeliveryMethodType)=>void;
    selectedDelivery:DeliveryMethodType|null,
    cart_id:string;
}

const INPOST_GEO_WIDGET_TOKEN = process.env.INPOST_GEOWIDGET

const InputBox = ({data,onSelectHandler,selectedDelivery,cart_id}:InputBoxPropsType) =>{
    const dispatch = useAppDispatch()

    const [showInpostGeoWidget,setShowInpostGeoWidget]= useState(false)

const {  carrier_code,
    carrier_title,
    method_code,
    method_title,
    amount} = data

    const circleStyles = selectedDelivery?.method_title===data.method_title?styles.selectedCircle:styles.selectCircle

    const onClickHandler =async () =>{
        const response = await setDeliveryMethod({cart_id,method_code,carrier_code})
        if(response){
            console.log('Response',response)
         const {prices}=   response.data.setShippingMethodsOnCart.cart
         const selected_shipping_method=   response.data.setShippingMethodsOnCart.cart.shipping_addresses[0].selected_shipping_method
dispatch(setSelectedDeliveryMethod({prices,selected_shipping_method}))
        }
        
      onSelectHandler(data)
//         if(carrier_code==='inpostlocker'){
//             console.log(INPOST_GEO_WIDGET_TOKEN)
// setShowInpostGeoWidget(true)
//         }
    }
console.log(carrier_code)
    const icon = DELIVERY_ICONS[carrier_code]!==undefined?DELIVERY_ICONS[carrier_code].src:InpostDefaultIcon.src
    return <> <div className={styles.container} onClick={onClickHandler}>
       <div className={styles.leftBox}>
       <span className={circleStyles}></span>
    <img src={icon} className={styles.icon}/>
    <span>{method_title}</span>
    </div>
    <div className={styles.priceBox}>{amount.value}{" "} {amount.currency}</div>
    
    </div>
    {showInpostGeoWidget&&<InpostGeoWidget token={INPOST_GEO_WIDGET_TOKEN?INPOST_GEO_WIDGET_TOKEN:""}/>}
    </>
}

export default InputBox