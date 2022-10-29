
import { Box } from '@chakra-ui/react';
import React from 'react';

export default function contact() {
  return (
    <Box as="section" style={{ width: '80%', minWidth: '300px', margin: '0 auto' }}>
      <p style={{ fontSize: "22px", fontWeight: "500", fontFamily: "Poppins" }}>Vous rencontrez un problème technique sur le site ou souhaitez faire remonter des remarques ou retours d'expérience? </p><p style={{ fontSize: "22px", fontWeight: "500", fontFamily: "Poppins", marginTop:"20px" }}>Merci d'envoyer un email à l'adresse suivante: <a style={{textDecoration:"underline"}} href="mailto:leo.terrier@decodage-fiscal.fr">leo.terrier@decodage-fiscal.fr</a> </p>
    </Box>
  );
}
