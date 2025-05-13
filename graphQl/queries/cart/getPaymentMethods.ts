interface GetPaymentMethodsArgsType {
    cart_id: string;
  }
  
  export const getPaymentMethodsGQL = ({
    cart_id,
  }: GetPaymentMethodsArgsType) => {
    const getPaymentMethodsQuery = `
    query {
  cart(cart_id: "${cart_id}") {
    available_payment_methods {
      code
      title
    }
  }
}
  `;
    return getPaymentMethodsQuery;
  };
  