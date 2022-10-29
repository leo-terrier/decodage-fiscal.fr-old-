import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { Simulateur } from './pages/Simulateur/Simulateur.js';

const colors = {
  dBlue: '#2D3142',
  mBlue: '#4F5D75',
  blueGray: '#718096',
  orange: '#EF8354',
  xlGray:"#EDF2F7",
   lGray: 'RGBA(0, 0, 0, 0.08)',
  /*mGray:"RGBA(0, 0, 0, 0.16)",
  dGray:"RGBA(0, 0, 0, 0.85)", */
  xxlBlueGray: "#E2E8F0",
  xlBlueGray: "#CBD5E0",
  lBlueGray: "#A0AEC0",
  paleGreen: '#C6F6D5'
  
};

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: colors.orange,
        height: '100%',
        position: 'relative',
        /* bg: '#A0AEC0', */
      },

      html: {
        height: '100%',
      },
    },
    colors: {
      brand: {
        100: '#03AA61',
        200: '#48BB78',
      },
      obj: colors,
    },
  },
  components: {
    NumberInputField: {
      baseStyle: {
        border: 'none',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar colors={colors} />
      {/* <Header /> */}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'stretch',
          height: 'calc(100vh - 80px)',
        }}
      > */}
      {/* <div style={{height: 'calc(100vh - 80px)', margin:"100px 0"}}> */}
      <main
        style={{
          height: '100%',
          width: '70%',
          minWidth: '1000px',
          backgroundColor: colors.lGray,
          backgroundColor: 'white',
          border: '2px solid',
          borderColor: colors.mBlue,
          margin: 'auto',
        }}
      >
        <Simulateur colors={colors} />
      </main>
      {/* </div> */}
      {/* <Form setResults={setResults} />
        <Results results={results} /> */}
      {/* </div> */}
    </ChakraProvider>
  );
}

export default App;
