/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from '../Provider';
import { DropdownSection } from '../DropdownSection';

export function DropdownRoot(): any {
  const { options } = useContext(Context);

  return (
    <div className="dropdown-root">
      <div>
        <div className="dropdown-container">
          {options.map(item => (
            <DropdownSection key={item.id} option={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
