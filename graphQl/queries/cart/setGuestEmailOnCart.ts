interface SetGuestEmailOnCartType {
    cart_id: string;
    email:string
  }
  
  export const setGuestEmailOnCartGQL = ({
    cart_id,
    email
  }: SetGuestEmailOnCartType) => {
    const setGuestEmailOnCartQuery = `
    mutation {
  setGuestEmailOnCart(input: {
    cart_id: "${cart_id}"
    email: "${email}"
  }) {
    cart {
      email
    }
  }
}
  `;
    return setGuestEmailOnCartQuery;
  };
  