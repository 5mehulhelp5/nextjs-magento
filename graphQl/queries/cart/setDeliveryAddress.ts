interface SetDeliveryAddressArgsType {
  cart_id: string;
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  postcode: string;
  country_code: string;
  telephone: string;
}

export const setDeliveryAddressGQL = ({
  cart_id,
  firstname,
  lastname,
  street,
  city,
  postcode,
  country_code,
  telephone,
}: SetDeliveryAddressArgsType) => {
  const setDeliveryAddressQuery = `
   mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "${cart_id}"
      shipping_addresses: [
        {
          address: {
            firstname: "${firstname}"
            lastname: "${lastname}"
            company: ""
            street: ["${street}"]
            city: "${city}"
            region: "Polska"
            region_id: 0
            postcode: "${postcode}"
            country_code: "PL"
            telephone: "${telephone}"
            save_in_address_book: false
          }
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
        region {
          code
          label
        }
        postcode
        telephone
        country {
          code
          label
        }
        available_shipping_methods{
           carrier_code
  carrier_title
  method_code
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
