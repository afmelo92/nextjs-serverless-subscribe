import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Stripe from 'stripe';
import CheckoutButton from '../components/CheckoutButton';

import stripeConfig from '../config/stripe';
import { Container } from '../styles/pages/Product';
import formatPrice from '../utils/formatPrice';

interface Props {
  product: Stripe.Product;
  price: number;
  priceId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27',
  });

  const products = await stripe.products.list();

  const paths = products.data.map(product => ({
    params: {
      productId: product.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27',
  });

  const { productId } = params;

  const product = await stripe.products.retrieve(productId as string);
  const prices = await stripe.prices.list();

  const productPrice = prices.data.filter(item => item.product === productId);

  return {
    props: {
      product,
      price: productPrice[0].unit_amount,
      priceId: productPrice[0].id,
    },
  };
};

const Product: React.FC<Props> = ({ product, price, priceId }) => {
  const formattedPrice = formatPrice(price / 100);

  return (
    <Container>
      <div>
        <h1>{product.name}</h1>
        {product.images && <img src={product.images[0]} alt={product.name} />}
        <h1>{formattedPrice}</h1>
        <h3>{product.description}</h3>
        <CheckoutButton itemName={product.name} priceId={priceId} />
      </div>
    </Container>
  );
};

export default Product;
