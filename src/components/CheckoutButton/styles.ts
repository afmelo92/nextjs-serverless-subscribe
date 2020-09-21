import { shade } from 'polished';
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StripeButton = styled.button`
  text-decoration: none;
  background: ${props => props.theme.color.primary};
  width: 300px;
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
`;
