interface SetBillingAddressArgsType {
  cart_id: string;
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  postcode: string;
  country_code: string;
  telephone: string;
}

export const setBillingAddressGQL = ({
  cart_id,
  firstname,
  lastname,
  street,
  city,
  postcode,
  country_code,
  telephone,
}: SetBillingAddressArgsType) => {
  const setBillingAddressQuery = `
   mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "${cart_id}"
     billing_address: 
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
      
    }
  ) {
    cart {
      billing_address {
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
      }
    }
  }
}
`;
  return setBillingAddressQuery;
};
