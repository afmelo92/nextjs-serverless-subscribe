/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

    img {
      width: 450px;
      height: 500px;
      margin: 20px 0;
      border-radius: 5px;
    }

    h1 {
      margin: 20px 0;
    }
  }
`;
