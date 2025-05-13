interface SetDeliveryMethodArgsType {
  cart_id: string;
  carrier_code:string,
  method_code:string
}

export const setDeliveryMethodGQL = ({
  cart_id,
  carrier_code,method_code
}: SetDeliveryMethodArgsType) => {
  const setDeliveryAddressQuery = `
 mutation {
  setShippingMethodsOnCart(input: {
    cart_id: "${cart_id}"
    shipping_methods: [
      {
        carrier_code: "${carrier_code}"
        method_code: "${method_code}"
      }
    ]
  }) {
    cart {
    prices {
        grand_total{
          value
          currency
        }
      }
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          method_code
          carrier_title
          method_title
           amount {
    value
    currency
  }
        }
      }
    }
  }
}
`;
  return setDeliveryAddressQuery;
};
