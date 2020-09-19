/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { useCallback, useLayoutEffect, useState } from 'react';

const getDimensions = element => element.getBoundingClientRect();

export function useDimensions(responsive = true): any {
  const [dimensions, setDimensions] = useState(null);
  const [element, setElement] = useState(null);

  const hook = useCallback(e => setElement(e), []);

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element));
        });
      };

      updateDimensions();

      if (responsive) {
        window.addEventListener('resize', updateDimensions);

        return () => {
          window.removeEventListener('resize', updateDimensions);
        };
      }
    }
  }, [element, hook, responsive]);

  return [hook, dimensions, element];
}
