import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Bold } from './impot_definition';

export default function about() {
  return (
    <Box as="section" className="about" style={{ width: '80%', minWidth: '300px', margin: '0 auto' }}>
      <p>Décodage Fiscal a pour but de fournir du contenu et des outils pédagogiques afin d'aider à la décision en matière fiscale et juridique.</p>
      <Text as="h1" fontSize= {{xs:"1.5rem", sm: "2rem"}} sx={{ margin: "40px 0 30px 0" }}>A propos du Simulateur pour freelance</Text>
      <p>Se lancer en tant qu'indépendant n'est pas chose aisée. Il faut tout d'abord posséder un savoir-faire qui a de la valeur, ce qui semble être une évidence, mais en plus de cela, il faut être prêt à évoluer dans un cadre réglementaire complexe et souvent ignoré du freelance. La première difficulté est le choix de la forme sociale (ou statut juridique).</p>
      <p>Les principaux statuts juridiques possibles pour un freelance sont la <Bold>SAS</Bold>, <Bold>la SARL</Bold>, et <Bold>la Micro-Entreprise</Bold>. Le cadre réglementaire de chaque statut est très différent, et il faut en principe les étudier un par un en prenant en compte une série de critères propres au freelance, afin de déterminer lequel convient le mieux.</p>
      <p>Le Simulateur collecte ces critères et mesure l'impact financier de chaque statut (tout impôt et cotisation confondus), afin d'aider les freelances à choisir celui qui semble le plus avantageux.</p>
      <p><span style={{textDecoration:"underline"}}>Pour information</span> : seule est mesurée la rentabilité de chaque statut. D'autres critères tels que la protection sociale devraient être également pris en compte dans le choix du statut.</p>
    </Box>
  );
}
