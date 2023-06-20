import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BsLink45Deg } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiFacebook, SiTwitter } from 'react-icons/si';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { serialize } from '../../util/helper';

const iconContainer = {
  width: '50px',
  height: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '506',
  cursor: 'pointer',
};

export default function shareButtons({ router }) {
  const simulationToShare =
    'https://decodage-fiscal-netlify.netlify.app/?' + serialize(router.query);

  const [copiedMessage, setCopiedMessage] = useState(false);

  return (
    <Box
      flexDirection={{ xs: 'column', sm: 'row' }}
      sx={{
        fontFamily: 'Fredoka',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '1.15rem',
        borderRadius: '30px',
        margin: '80px auto 0 auto',
        boxShadow: '0 1px 4px rgba(0, 0, 0, .3)',
        padding: '12px 30px',
        color: '#2D3142',
      }}
    >
      <Text mr={{ xs: 0, sm: '15px' }}>PARTAGER :</Text>
      <Box sx={{ display: 'flex' }}>
        <Box
          transition="all .1s"
          sx={{ ...iconContainer, display: 'flex', position: 'relative' }}
          _hover={{
            backgroundColor: { xs: 'white', sm: 'rgba(0, 0, 0, .08)' },
          }}
          onClick={() => {
            navigator.clipboard.writeText(simulationToShare);
            setCopiedMessage(true);
            setTimeout(() => setCopiedMessage(false), 2000);
          }}
        >
          <BsLink45Deg size="25px" />
        </Box>
        <Box
          transition="all .1s"
          sx={iconContainer}
          display={{ xs: 'flex', sm: 'none' }}
          _hover={{
            backgroundColor: { xs: 'white', sm: 'rgba(0, 0, 0, .08)' },
          }}
        >
          <WhatsappShareButton url={simulationToShare}>
            <WhatsappIcon round size="25px" />
          </WhatsappShareButton>
        </Box>
        <Box
          transition="all .1s"
          sx={{ ...iconContainer, display: 'flex' }}
          _hover={{
            backgroundColor: { xs: 'white', sm: 'rgba(0, 0, 0, .08)' },
          }}
        >
          <LinkedinShareButton url={simulationToShare}>
            <FaLinkedinIn color="#0e76a8" size="25px" />
          </LinkedinShareButton>
        </Box>
        <Box
          transition="all .1s"
          sx={{ ...iconContainer, display: 'flex' }}
          _hover={{
            backgroundColor: { xs: 'white', sm: 'rgba(0, 0, 0, .08)' },
          }}
        >
          <TwitterShareButton url={simulationToShare}>
            <SiTwitter color="#1DA1F2" size="25px" />
          </TwitterShareButton>
        </Box>
        <Box
          transition="all .1s"
          sx={{ ...iconContainer, display: 'flex' }}
          _hover={{
            backgroundColor: { xs: 'white', sm: 'rgba(0, 0, 0, .08)' },
          }}
        >
          <FacebookShareButton url={simulationToShare}>
            <SiFacebook color="#1778F2" size="25px" />
          </FacebookShareButton>
        </Box>
      </Box>
      <Text
        bottom={{ xs: '110px', sm: '80px' }}
        sx={{
          display: copiedMessage ? 'block' : 'none',
          position: 'absolute',
          left: 0,
          right: 0,
          width: '200px',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '1.3rem',
          color: 'rgba(0, 0, 0, .85)',
          fontFamily: 'Nunito Sans',
          fontWeight: 700,
        }}
        transition="all .1s"
      >
        Lien copié !
      </Text>
    </Box>
  );
}
