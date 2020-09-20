import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import logo from '../../assets/green_triangle.png';

import { Container, Navbar, NavLogo, NavItems } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
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
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            uncheckedIcon={false}
            checkedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
          />
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
