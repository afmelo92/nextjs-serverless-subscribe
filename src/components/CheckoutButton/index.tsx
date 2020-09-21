import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../../config/stripe';

const stripePromise = loadStripe(stripeConfig.publicKey);

interface Props {
  priceId: string;
  itemName: string;
}

const CheckoutButton: React.FC<Props> = ({ priceId, itemName }) => {
  async function handleClick() {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId, // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/success?itemName=${itemName}`,
      cancelUrl: `http://localhost:3000/cancel?itemName=${itemName}`,
    });

    if (error) {
      console.log(error);
    }
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  return (
    <button type="button" role="link" onClick={handleClick}>
      Comprar
    </button>
  );
};

export default CheckoutButton;
