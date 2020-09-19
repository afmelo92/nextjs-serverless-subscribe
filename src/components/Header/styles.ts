/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #00cc00 15%, #006b00);

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 21px;
  }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    border: 0;
    background: transparent;
    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }
`;
/**
 *
 *
 *
export const Navbar = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  img {
    margin: 0 0 0 auto;
    width: 40px;
    height: 40px;
  }

  h1 {
    margin: 0 auto 0 -22px;
    font-size: 30px;
    color: ${props => props.theme.colors.text};
  }
`;

export const NavItems = styled.div`
  display: flex;
  margin-right: 90px;

  a {
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    text-decoration: none;
    margin: 0 20px 0 20px;

    &:hover {
      transition: 0.5s;
      opacity: 0.8;
    }
  }
`;

 */
