import { chakra, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../App.css';
import { NavBar } from '../src/components/NavBar/NavBar.js';

import { useEffect } from 'react';

import { hotjar } from 'react-hotjar';

export default function MyApp({ Component /* , pageProps */ }) {
  const [results, setResults] = useState({});

  //simulateur single/married tab //
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    hotjar.initialize('3226816', '6');

    // Identify the user
    hotjar.identify('USER_ID', { userProperty: 'value' });

    // Identify the user
    hotjar.identify('USER_ID', { userProperty: 'value' });

    // Add an event
    hotjar.event('button-click');

    // Update SPA state
    hotjar.stateChange('/my/page');

    // Check if Hotjar has been initialized before calling its methods
    if (hotjar.initialized()) {
      hotjar.identify('USER_ID', { userProperty: 'value' });
    }
  }, []);

  const colors = {
    dBlue: '#2D3142',
    mBlue: '#4F5D75',
    blueGray: '#718096',
    otherBlue: '#22409b',
    orange: '#ef7b54',
    lOrange: 'rgba(239, 131, 84, .3)',
    lOrangeOpac: '#fbdacc',
    xlGray: '#EDF2F7',
    lGray: 'RGBA(0, 0, 0, 0.08)',
    dGray: 'RGBA(0, 0, 0, 0.64)',
    xdGray: 'RGBA(0, 0, 0, 0.80)',
    xxlBlueGray: '#E2E8F0',
    xlBlueGray: '#CBD5E0',
    lBlueGray: '#A0AEC0',
    paleGreen: '#C6F6D5',
  };
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: '#ef7b54',
          maxWidth: '100vw',
          width: '100vw',
          overflowX: 'hidden',
          overflowY: 'scroll',
          scrollbarGutter: 'stable',
        },
      },
    },
    components: {
      Select: {
        baseStyle: {},
        variants: {
          base: {},
        },
        defaultProps: {
          variant: 'base',
        },
      },
    },
    breakpoints: {
      xs: '0',
      vs: '500px',
      sm: '1000px',
      md: '1250px',
      lg: '1345px',
      xl: '1492px',
      '2xl': '1600px',
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <NavBar
        colors={colors}
        setResults={setResults}
        setTabIndex={setTabIndex}
      />
      <chakra.main
        width={{ xs: '95%', vs: '92%', md: '88%', lg: '80%', xl: '75%' }}
        sx={{
          minHeight: '100vh',
          backgroundColor: colors.lGray,
          backgroundColor: 'white',
          border: '2px solid',
          borderColor: colors.mBlue,
          margin: 'auto',
          borderTop: 'none',
        }}
        p={{ xs: '5vh 0 7vh 0', sm: '7vh 0 9vh 0' }}
      >
        <Component
          /* {...pageProps} */ colors={colors}
          results={results}
          setResults={setResults}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
        />
      </chakra.main>
    </ChakraProvider>
  );
}
