import { GetStaticProps } from 'next';
import React from 'react';
import Stripe from 'stripe';

import stripeConfig from '../config/stripe';
import { Container, ProductContainer } from '../styles/pages/Products';

interface Props {
  products: Stripe.Product[];
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27',
  });

  const products = await stripe.products.list();

  return {
    props: {
      products: products.data,
    },
  };
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <h1>Mini Stripe shop</h1>
      <div>
        {products.map(product => (
          <ProductContainer key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.description}</h3>
            <a href={`/${product.id}`}>Comprar</a>
          </ProductContainer>
        ))}
      </div>
    </Container>
  );
};

export default Products;
