/* import { extendTheme } from '@chakra-ui/react';

import React from 'react'; */
import { Simulateur } from '../src/pages/Simulateur/Simulateur.js';

function App({ tabIndex, setTabIndex, colors, results, setResults }) {
  return (
    <Simulateur
      colors={colors}
      results={results}
      setResults={setResults}
      tabIndex={tabIndex}
      setTabIndex={setTabIndex}
    />
  );
}

export default App;
