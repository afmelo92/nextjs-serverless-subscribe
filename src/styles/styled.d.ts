/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };
  }
}
