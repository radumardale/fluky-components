import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme';

// wrapInTheme :: Component -> Component
export default Component => (props) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props}/>
      </ThemeProvider>
    );
};
