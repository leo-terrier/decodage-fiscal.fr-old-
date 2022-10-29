/* import { extendTheme } from '@chakra-ui/react';

import React from 'react'; */
import { Simulateur } from '../src/pages/Simulateur/Simulateur.js';

function App({ colors, results, setResults }) {
  return <Simulateur colors={colors} results={results} setResults={setResults}  />;
}

export default App;
