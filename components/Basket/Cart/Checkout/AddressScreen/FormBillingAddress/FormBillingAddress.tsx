'use client';
import {ChangeEvent, useEffect, useState} from 'react';
import styles from './formBillingAddress.module.scss';
import {
  setBillingAddress,
  setDeliveryAddress,
  setGuestEmail,
} from '@/components/Api/Cart/checkout';
import {
  setDeliveryAddress as setDeliveryAddressDispatch,
  setBillingAddress as setBillingAddressDispatch,
  setGuestEmail as setGuestEmailDispatch
} from '@/redux/shopping-cart-slice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';

interface FormBillingAddressPropsType {
  deliveryAddressSameAsBilling: boolean;
  submit: boolean;
  onOkBillingFormStatus:()=>void;
  onOkDeliveryFormStatus:()=>void;
  onDeliveryAddressSameAsBilling: (
    deliveryAddressSameAsBilling: boolean
  ) => void;

  onResetSubmit: () => void;
}

const FormBillingAddress = ({
  submit,
  deliveryAddressSameAsBilling,
  onResetSubmit,
  onDeliveryAddressSameAsBilling,onOkBillingFormStatus,onOkDeliveryFormStatus
}: FormBillingAddressPropsType) => {

  const dispatch = useAppDispatch();
  const shoppingCartStore = useAppSelector(state=>state.shoppingCart)
  const cart_id = shoppingCartStore.cartId
const billingAddressStore = shoppingCartStore.billingAddress
const guestEmailStore = shoppingCartStore.guestEmail

  const [formData, setFormData] = useState({
    firstname: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.firstname,
    },
    lastname: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.lastname,
    },
    country_code: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.country.code,
    },
    street: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.street[0],
    },
    postcode: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.postcode,
    },
    city: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.city,
    },
    email: {
      error: {
        status: false,
        message: '',
      },
      value: guestEmailStore,
    },
    telephone: {
      error: {
        status: false,
        message: '',
      },
      value: billingAddressStore.telephone,
    },
  });


  const switchStyles = `${styles.switch} ${deliveryAddressSameAsBilling && styles.checked}`;
const firstNameInputStyles = formData.firstname.error.status?styles.inputError:"";
const lastNameInputStyles = formData.lastname.error.status?styles.inputError:"";
const streetInputStyles = formData.street.error.status?styles.inputError:"";
const postcodeInputStyles = formData.postcode.error.status?styles.inputError:"";
const cityInputStyles = formData.city.error.status?styles.inputError:"";
const emailInputStyles = formData.email.error.status?styles.inputError:"";
const telephoneInputStyles = formData.telephone.error.status?styles.inputError:"";


  const firstnameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      firstname: {
        ...prevState.firstname,
        value: e.target.value,
      },
    }));
    if(formData.firstname.error.status){
        if(e.target.value.length>=3){
            setFormData((prevState) => ({
                ...prevState,
                firstname: {
                  ...prevState.firstname,
                  error:{
                    ...prevState.firstname.error,status:false
                  }
                },
              }));
        }
    }
  };


  const lastnameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      lastname: {
        ...prevState.lastname,
        value: e.target.value,
      },
    }));
    if(formData.lastname.error.status){
        if(e.target.value.length>=3){
            setFormData((prevState) => ({
                ...prevState,
                lastname: {
                  ...prevState.lastname,
                  error:{
                    ...prevState.lastname.error,status:false
                  }
                },
              }));
        }
    }
  };


  const streetOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      street: {
        ...prevState.street,
        value: e.target.value,
      },
    }));
    if(formData.street.error.status){
        if(e.target.value.length>=3){
            setFormData((prevState) => ({
                ...prevState,
                street: {
                  ...prevState.street,
                  error:{
                    ...prevState.street.error,status:false
                  }
                },
              }));
        }
    }
  };


  const postcodeOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      postcode: {
        ...prevState.postcode,
        value: e.target.value,
      },
    }));
    if(formData.postcode.error.status){
        if(e.target.value.length===6){
            setFormData((prevState) => ({
                ...prevState,
                postcode: {
                  ...prevState.postcode,
                  error:{
                    ...prevState.postcode.error,status:false
                  }
                },
              }));
        }
    }
  };


  const cityOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      city: {
        ...prevState.city,
        value: e.target.value,
      },
    }));
    if(formData.city.error.status){
        if(e.target.value.length>=3){
            setFormData((prevState) => ({
                ...prevState,
                city: {
                  ...prevState.city,
                  error:{
                    ...prevState.city.error,status:false
                  }
                },
              }));
        }
    }
  };


  const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        value: e.target.value,
      },
    }));
    if(formData.email.error.status){
        if(e.target.value.length>=3){
            setFormData((prevState) => ({
                ...prevState,
                email: {
                  ...prevState.email,
                  error:{
                    ...prevState.email.error,status:false
                  }
                },
              }));
        }
    }
  };


  const telephoneOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      telephone: {
        ...prevState.telephone,
        value: e.target.value,
      },
    }));
    if(formData.telephone.error.status){
        if(e.target.value.length===9){
            setFormData((prevState) => ({
                ...prevState,
                telephone: {
                  ...prevState.telephone,
                  error:{
                    ...prevState.telephone.error,status:false
                  }
                },
              }));
        }
    }
  };

  const submitHandler = async () => {
    const dataToSend = {
      firstname: formData.firstname.value,
      lastname: formData.lastname.value,
      country_code: formData.country_code.value,
      street: formData.street.value,
      postcode: formData.postcode.value,
      city: formData.city.value,
      email: formData.email.value,
      telephone: formData.telephone.value,
    };
    if (cart_id) {
      const {
        firstname,
        lastname,
        country_code,
        street,
        postcode,
        city,
        email,
        telephone,
      } = dataToSend;

if(firstname.length<3){
    formData.firstname.error.status=true
}
if(lastname.length<3){
    formData.lastname.error.status=true
}
if(street&&street.length<3){
    formData.street.error.status=true
}
if(postcode.length!==6){
    formData.postcode.error.status=true
}
if(city.length<3){
    formData.city.error.status=true
}
if(email.length<3){
    formData.email.error.status=true
}
if(telephone.length<9){
    formData.telephone.error.status=true
}

const formDataArray = Object.values(formData).map(item=>item.error.status)
const hasErrors = formDataArray.find(item=>item===true)

if(hasErrors)return;
      const response = await setBillingAddress({
        cart_id,
        firstname,
        lastname,
        country_code,
        street,
        postcode,
        city,
        email,
        telephone,
      });
      const data = response?.data;
      if (data) {
        dispatch(
          setBillingAddressDispatch(
            data.setBillingAddressOnCart.cart.billing_address
          )
        );
      }
      const emailResponse = await setGuestEmail({cart_id,email})
      const emailData = emailResponse?.data;
      if(emailData){
        dispatch(setGuestEmailDispatch(emailData.setGuestEmailOnCart.cart.email))
      }
      if(data&&emailData){
        onOkBillingFormStatus()
      }
      if (deliveryAddressSameAsBilling) {
        const response = await setDeliveryAddress({
          cart_id,
          firstname,
          lastname,
          country_code,
          street,
          postcode,
          city,
          email,
          telephone,
        });
        const data = response?.data;
        if (data) {
          console.log(data,'delivery')
          dispatch(
            setDeliveryAddressDispatch(
              data.setShippingAddressesOnCart.cart.shipping_addresses[0]
            )
          );
          onOkDeliveryFormStatus()
        }
      }
    }
  };
  useEffect(() => {
    if (submit) {
      submitHandler();
      onResetSubmit();
    }
  }, [submit]);
  return (
    <div className={styles.container}>
      <h2>Dane do płatności</h2>
      <form className={styles.form}>
        <div className={styles.rowBox}>
          <div className={styles.inputBox}>
            <label htmlFor="firstname">IMIĘ</label>
            <input
            className={firstNameInputStyles}
              name="firstname"
              onChange={(e) => firstnameOnChangeHandler(e)}
              value={formData.firstname.value}
              minLength={3}
              type="text"
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="lastname">NAZWISKO</label>
            <input
            className={lastNameInputStyles}
              name="lastname"
              onChange={(e) => lastnameOnChangeHandler(e)}
              value={formData.lastname.value}
              minLength={3}
              type="text"
            />
          </div>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="country_code">KRAJ</label>
          <input name="country_code" value="POLSKA" disabled type="text" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="street">ADRES</label>
          <input
          className={streetInputStyles}
            name="street"
            onChange={(e) => streetOnChangeHandler(e)}
            value={formData.street.value}
            type="text"
          />
        </div>
        <div className={styles.rowBox}>
          <div className={styles.inputBox}>
            <label htmlFor="postcode">KOD POCZTOWY</label>
            <input
            className={postcodeInputStyles}
              name="postcode"
              onChange={(e) => postcodeOnChangeHandler(e)}
              value={formData.postcode.value}
              type="text"
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="city">MIEJSCOWOŚĆ</label>
            <input
            className={cityInputStyles}
              name="city"
              onChange={(e) => cityOnChangeHandler(e)}
              value={formData.city.value}
              type="text"
            />
          </div>
        </div>
        <div className={styles.rowBox}>
          <div className={styles.inputBox}>
            <label htmlFor="email">E-MAIL</label>
            <input
            className={emailInputStyles}
              name="email"
              onChange={(e) => emailOnChangeHandler(e)}
              value={formData.email.value}
              type="email"
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="telephone">TELEFON</label>
            <input
            className={telephoneInputStyles}
              name="telephone"
              onChange={(e) => telephoneOnChangeHandler(e)}
              value={formData.telephone.value}
              type="tel"
            />
          </div>
        </div>
      </form>
      <div style={{display: 'flex', gap: '1rem'}}>
        <button
          className={switchStyles}
          onClick={() =>
            onDeliveryAddressSameAsBilling(deliveryAddressSameAsBilling)
          }
        >
          <span className={styles.circle}></span>
        </button>
        <label htmlFor="billingAdressSameAsDelivery">
          Adres dostawy taki sam jak płatności
        </label>
      </div>
    </div>
  );
};

export default FormBillingAddress;
