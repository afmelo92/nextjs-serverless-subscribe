/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 30px;
  }

  div {
    display: flex;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background: ${props => props.theme.color.secondary};
  padding: 10px;
  border-radius: 10px;

  h1 {
    font-size: 20px;
  }

  img {
    width: 250px;
    height: 250px;
    margin: 20px 0;
    border-radius: 5px;
  }

  h3 {
    font-size: 15px;
  }

  a {
    text-decoration: none;
    background: ${props => props.theme.color.primary};
    width: 100%;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    margin-top: 5px;
    font-weight: bold;
    color: #fff;

    &:hover {
      transition: 0.55s;
      background: ${props => shade(0.15, props.theme.color.primary)};
    }
  }

  + div {
    margin-left: 20px;
  }
`;
