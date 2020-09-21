import React from 'react';
import { useRouter } from 'next/router';

import { Container } from '../styles/pages/Success';

const Success: React.FC = () => {
  const {
    query: { itemName },
  } = useRouter();

  return (
    <Container>
      <h1>Obrigado por ter comprado {itemName}!</h1>
      <a href="/products">Voltar às compras</a>
    </Container>
  );
};

export default Success;
