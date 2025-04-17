'use client';
import {ChangeEvent, useEffect, useState} from 'react';
import styles from './formDeliveryAddress.module.scss';
import Logo from '@/public/assets/logo/ATZM_new_logo.svg';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {setDeliveryAddress} from '@/components/Api/Cart/checkout';
import {setDeliveryAddress as setDeliveryAddressDispatch} from '@/redux/shopping-cart-slice';
interface FormDeliveryAddressPropsType {
  showForm: boolean;
  submit: boolean;
  onResetSubmit: () => void;
}

const FormDeliveryAddress = ({
  submit,
  showForm,
  onResetSubmit,
}: FormDeliveryAddressPropsType) => {
  const dispatch = useAppDispatch();
  const cart_id = useAppSelector((state) => state.shoppingCart.cartId);

  const [formData, setFormData] = useState({
    firstname: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    lastname: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    country_code: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    street: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    postcode: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    city: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    email: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
    telephone: {
      error: {
        status: false,
        message: '',
      },
      value: '',
    },
  });

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
    if(street.length<3){
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
        dispatch(
          setDeliveryAddressDispatch(
            data.setShippingAddressesOnCart.cart.shipping_addresses[0]
          )
        );
      }
    }
  };
  useEffect(() => {
    if (showForm && submit) {
      submitHandler();
      onResetSubmit();
    }
  }, [submit]);
  if (showForm) {
    return (
      <div className={styles.container}>
        <h2>Adres do wysyłki</h2>
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
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={Logo.src} />
      </div>{' '}
    </div>
  );
};

export default FormDeliveryAddress;
