import React from 'react';
import Company from '../Content/Company';
import Developers from '../Content/Developers';
import Products from '../Content/Products';

import DropdownOption from '../Dropdown/DropdownOption';
import DropdownRoot from '../Dropdown/DropdownRoot';
import { DropdownProvider } from '../Dropdown/Provider';

import { Container, DropdownStyles } from './styles';

const Header: React.FC = () => {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Products" content={Products} />
            </li>
            <li>
              <DropdownOption name="Developers" content={Developers} />
            </li>
            <li>
              <DropdownOption name="Company" content={Company} />
            </li>
          </ul>
        </Container>
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
};

export default Header;
