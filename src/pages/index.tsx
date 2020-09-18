import React, { useCallback, useRef } from 'react';
import Head from 'next/head';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import logo from '../assets/green_triangle.png';

import { Container } from '../styles/pages/Home';
import getValidationErrors from '../utils/getValidationErrors';
import Input from '../components/Input';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Mensagem obrigatória'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('E-mail precisa ser válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, email } = data;

      const response = await axios.post('/api/subscribe', { email });

      console.log({
        response,
        name,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        console.log(errors);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>NEXTJS PLAYGROUND</title>
      </Head>

      <section>
        <div className="logo-banner">
          <img src={logo} alt="logo" />
          <h1>AFMELO</h1>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FaUser} placeholder="Seu nome" />
          <Input name="email" icon={FiMail} placeholder="Seu melhor e-mail" />
          <button type="submit">Subscribe</button>
        </Form>
        <a href="/another">Go to another page</a>
      </section>
    </Container>
  );
};

export default Home;