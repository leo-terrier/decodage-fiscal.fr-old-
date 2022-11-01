import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/logo.png';

export const NavBar = ({ colors, setResults, setTabIndex }) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

  const style = {
    nav: {
      width: '100vw',
      minWidth: '100vw',
      maxWidth: '100vw',
      height: isLargerThan1000 ? '80px' : '62px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderBottom: '2px solid',
      borderColor: colors.dBlue,
    },
    logoContainer: {
      display: 'flex',
      height: '95%',
      marginLeft: isLargerThan1000 ? '18px' : '14px',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    logoImageContainer: {
      width: isLargerThan1000 ? '80px' : '62px',
      minWidth: isLargerThan1000 ? '80px' : '62px',
      display: 'flex',
      alignItems: 'center',
    },
    logoImg: {
      width: '100%',
      maxWidth: '100%',
    },
    logoDivider: {
      height: '85%',
      borderColor: colors.orange,
      borderLeftWidth: isLargerThan1000 ? '4px' : '3px',
      margin: isLargerThan1000 ? 'auto 14px' : 'auto 11px',
      borderRadius: '10px',
    },
    logoText: {
      color: colors.dBlue,
      fontFamily: 'Fredoka',
      fontSize: isLargerThan1000 ? '32px' : '26px',
      fontWeight: 500,
      maxWidth: isLargerThan1000 ? '220px' : '130px',
      lineHeight: 1,
      textShadow: isLargerThan500 ? 'rgba(0, 0, 0, .3)  0 .5px 2px' : 'none',
    },
    menuButtonBox: {
      display: isLargerThan1000 ? 'flex' : 'none',
      justifyContent: 'space-around',
      alignItems: 'end',
      width: '52%',
      height: '100%',
    },
    menuButton: {
      fontSize: '1.3rem',
      fontFamily: 'Poppins',
      fontWeight: 600,
      color: colors.dBlue,
      padding: '5px 10px',
      borderRadius: '11px',
      letterSpacing: 1,
      textShadow: isLargerThan500 ? 'rgba(0, 0, 0, .2)  0 .5px 2px' : 'none',
    },
    menuButtonHover: {
      color: colors.orange,
    },
    menuList: {
      display: 'none' /*
      borderColor: colors.mBlue,
      borderRadius: '3px',
      textAlign: 'center',
      backgroundColor: colors.lOrangeOpac,
      opacity: '.9',
      color: colors.dBlue,
      fontWeight: '600',
    */,
    } /*
    menuListItem: {
      padding: '10px',
      fontFamily: 'Varela round',
      fontSize: '1.1rem',
      cursor: 'pointer',
    },
    menuItemHover: {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      fontWeight: '600',
    },*/,
    burgerMenuContainer: {
      display: isLargerThan1000 ? 'none' : 'flex',
      maxHeight: '100%',
      height: '100%',
      alignItems: 'center',
      marginRight: '20px',
      zIndex: 4,
    },
    burgerMenuListItems: {
      color: colors.dBlue,
      fontFamily: 'Montserrat',
      fontSize: '20px',
      fontWeight: 500,
    },
  };
  return (
    <nav style={style.nav}>
      <Link href="/">
        <div
          style={style.logoContainer}
          className="logoContainer"
          onClick={() => {
            setTabIndex(0)
            setResults({});
          }}>
          <div className="logoImagesContainer" style={style.logoImageContainer}>
            <Image style={style.logoImg} src={logo} alt="logo du site" />
          </div>
          <div className="logoDivider" style={style.logoDivider}></div>
          <h1 className="bold" style={style.logoText}>
            Décodage fiscal
          </h1>
        </div>
      </Link>
      <Box className="burgerMenuContainer" sx={style.burgerMenuContainer}>
        <Menu placement="left-start">
          <MenuButton aria-label='Options'className="menuButton" as={IconButton} icon={<HamburgerIcon sx={{ fontSize: '40px' }} />} variant="unstyled"></MenuButton>
          <MenuList p={0}>
            <Link href="/impot_definition">
              <MenuItem
                _hover={{ backgroundColor: 'initial' }}
                _focus={{ backgroundColor: 'initial' }}
                justifyContent="center"
                sx={style.burgerMenuListItems}>
                Articles
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem
                _hover={{ backgroundColor: 'initial' }}
                _focus={{ backgroundColor: 'initial' }}
                justifyContent="center"
                sx={style.burgerMenuListItems}
                onClick={() => {
                  setTabIndex(0);
                  setResults({});
                }}>
                Simulateurs
              </MenuItem>
            </Link>
            <Link href="/about">
              <MenuItem
                _hover={{ backgroundColor: 'initial' }}
                _focus={{ backgroundColor: 'initial' }}
                justifyContent="center"
                sx={style.burgerMenuListItems}>
                A propos
              </MenuItem>
            </Link>
            <Link href="/contact">
              <MenuItem
                _hover={{ backgroundColor: 'initial' }}
                _focus={{ backgroundColor: 'initial' }}
                justifyContent="center"
                sx={style.burgerMenuListItems}>
                Contact
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Box mr={{ xs: 0, sm: '1%', md: 0 }} className="menuButtonBox" sx={style.menuButtonBox}>
        <Link href="/impot_definition">
          <ChakraLink
            className="menuButton"
            variant="ghost"
            transition="all .1s"
            sx={style.menuButton}
            _hover={style.menuButtonHover}>
            Articles
          </ChakraLink>
        </Link>
        <Link href="/">
          <ChakraLink
            className="menuButton"
            variant="ghost"
            transition="all .1s"
            sx={style.menuButton}
            _hover={style.menuButtonHover}
            onClick={() => {
              setTabIndex(0);
              setResults({});
            }}>
            Simulateurs
          </ChakraLink>
        </Link>
        <Link href="/about">
          <ChakraLink
            className="menuButton"
            variant="ghost"
            transition="all .1s"
            sx={style.menuButton}
            _hover={style.menuButtonHover}>
            A propos
          </ChakraLink>
        </Link>
        <Link href="/contact">
          <ChakraLink
            className="menuButton"
            variant="ghost"
            transition="all .1s"
            sx={style.menuButton}
            _hover={style.menuButtonHover}>
            Contact
          </ChakraLink>
        </Link>
      </Box>
    </nav>
  );
};
