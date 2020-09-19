import React from 'react';
import logo from '../../assets/green_triangle.png';

import { Container, Navbar, NavLogo, NavItems } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <NavLogo>
          <img src={logo} alt="logo" />
          <h1>AFMELO</h1>
        </NavLogo>
        <NavItems>
          <a href="/">Products</a>
          <a href="/">Developers</a>
          <a href="/">Company</a>
          <a href="/">Contact</a>
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
