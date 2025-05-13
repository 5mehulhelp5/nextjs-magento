'use client';
import {useEffect, useState} from 'react';
import styles from './addressScreen.module.scss';
import FormBillingAddress from './FormBillingAddress/FormBillingAddress';
import FormDeliveryAddress from './FormDeliveryAddress/FormDeliveryAddress';
import {useAppSelector} from '@/redux/hooks';

interface AddressScreenPropsType {
  onComplete: () => void;
}

const AddressScreen = ({onComplete}: AddressScreenPropsType) => {
  const deliveryFirstname = useAppSelector(
    (state) => state.shoppingCart.deliveryAddress.firstname
  );
  const billingFirstname = useAppSelector(
    (state) => state.shoppingCart.billingAddress.firstname
  );
  const [deliveryAddressSameAsBilling, setDeliveryAddressSameAsBilling] =
    useState(true);
  const [submit, setSubmit] = useState(false);
  const [formsStatus,setFormsStatus]= useState({
    deliveryFormOk:false,
    billingFormOk:false
  })

  const setOkDeliveryFormStatusHandler=()=>{
    setFormsStatus((prevState=>({
      ...prevState,deliveryFormOk:true
    })))
  }

  const setOkBillingFormStatusHandler=()=>{
    setFormsStatus((prevState=>({
      ...prevState,billingFormOk:true
    })))
  }

  const deliveryAddressSameAsBillingHandler = (
    deliveryAddressSameAsBilling: boolean
  ) => {
    setDeliveryAddressSameAsBilling(!deliveryAddressSameAsBilling);
    console.log(deliveryAddressSameAsBilling);
  };

  const submitHandler = () => {
    setSubmit(true);
  };
  const resetSubmitHandler = () => {
    setSubmit(false);
  };

  useEffect(() => {
    console.log(formsStatus)
    if (formsStatus.billingFormOk && formsStatus.deliveryFormOk) {
      onComplete();
    }
  }, [formsStatus]);
  return (
    <div className={styles.container}>
      <div className={styles.rowBox}>
        <FormBillingAddress
          submit={submit}
          onResetSubmit={resetSubmitHandler}
          onOkBillingFormStatus={setOkBillingFormStatusHandler}
          onOkDeliveryFormStatus={setOkDeliveryFormStatusHandler}
          deliveryAddressSameAsBilling={deliveryAddressSameAsBilling}
          onDeliveryAddressSameAsBilling={deliveryAddressSameAsBillingHandler}
        />
        <FormDeliveryAddress
          submit={submit}
          onResetSubmit={resetSubmitHandler}
          showForm={!deliveryAddressSameAsBilling}
        />
      </div>
      <button onClick={submitHandler}>Submit form</button>
    </div>
  );
};

export default AddressScreen;
