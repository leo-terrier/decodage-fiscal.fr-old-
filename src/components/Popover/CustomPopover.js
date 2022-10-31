import { Box, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react';
import { BsQuestion } from 'react-icons/bs';

const styleP = { margin: '15px', lineHeight: '1.75', fontFamily: 'Poppins' };

export const Bold = (props) => {
  return <span style={{ fontWeight: 'bold' }}>{props.children}</span>;
};

const content = (label) => {
  switch (label) {
    case 'nbOfChildren':
      return (
        <div>
          <p style={styleP}>
            Il peut tout d'abord s'agir{' '}
            <Bold> des enfants mineurs dont vous avez la charge</Bold>.
          </p>
          <p style={styleP}>
            Il peut par ailleurs s'agir des enfants{' '}
            <Bold>
              de moins de 25 ans, toujours étudiant, et rattachés à votre foyer
              fiscal
            </Bold>{' '}
            (
            <a
              href="https://www.impots.gouv.fr/particulier/questions/mon-enfant-est-majeur-comment-le-declarer#:~:text=de%20vos%20revenus.-,Le%20rattachement,ou%20au%2031%20d%C3%A9cembre%202021."
              style={{ textDecoration: 'underline' }}
            >
              plus d'information
            </a>
            ).
          </p>
          <p style={styleP}>
            Enfin, les enfants ne sont pas les seuls à être pris en
            considération dans le quotien familial, vous pouvez également
            intégrer toute personne majeure dont vous avez la charge (
            <a
              href="https://www.impots.gouv.fr/particulier/autres-personnes-charge#:~:text=Vous%20pouvez%20compter%20%C3%A0%20charge,ou%20de%20la%20CMI-invalidit%C3%A9."
              style={{ textDecoration: 'underline' }}
            >
              plus d'information
            </a>
            ).
          </p>
        </div>
      );
    case 'isService':
      return (
        <div>
          <p style={styleP}>
            Les <Bold>activités d'achat-revente</Bold> consistent à faire du négoce (ex: dans le textile).
          </p>
          <p style={styleP}>
            A l'inverse, les autres activités sont principalement
            <Bold> les prestations de services</Bold> et
            <Bold> les activités artisanales</Bold>.
          </p>
        </div>
      );
    case 'isProfessional':
      return (
        <div>
          <p style={styleP}>
            Est considéré comme un <Bold>professionnel libéral</Bold> celui qui vend une prestation à caractère intellectuel ou artistique, répondant
            à des besoins précis du client (ex: developer web, architecte).
          </p>
          <p style={styleP}>
            A l'inverse, <Bold>ne sont pas considérées comme libérales</Bold> les activités qui n'impliquent pas à titre principal une prestation
            intellectuelle répondant aux besoins du client (ex: conception et commercialisation de logiciel, artisanat).
          </p>
        </div>
      );
    case 'revenue':
      return (
        <div>
          <p style={styleP}>
            Il s'agit de votre <Bold>chiffre d'affaires annuel hors taxe</Bold> (le montant global de vos recettes, moins la TVA éventuellement
            collectée).
          </p>
        </div>
      );
    case 'expenses':
      return (
        <div>
          <p style={styleP}>
            Seules doivent être déduites les charges ayant un
            <Bold> caractère professionnel</Bold>.
          </p>
          <p style={styleP}>
            Afin de répondre à cette exigence, les depenses doivent être
            <Bold> nécessaires à l'activité</Bold> (ex: augmenter sa visibilité en ligne, voyage professionnel).
          </p>
        </div>
      );
    case 'compensation':
      return (
        <div>
          <p style={styleP}>
            Il s'agit du <Bold>salaire net annuel</Bold> que vous souhaitez recevoir (déduction faite de tout impôt et cotisation).
          </p>
        </div>
      );
    case 'salary':
      return (
        <div>
          <p style={styleP}>
            Il s'agit du <Bold>salaire brut annuel</Bold> tel qu'il figure sur votre contrat de travail (avant déduction de l'impôt et des cotisations
            sociales salariales).
          </p>
        </div>
      );
    case 'netIncome':
      return (
        <div>
          <p style={styleP}>
            Il s'agit du <Bold>montant imposable des revenus</Bold>, que vous pouvez notamment trouver sur votre avis d'imposition.
          </p>
        </div>
      );
  }
};

export const CustomPopover = ({ isLargerThan1000, label, isMeAboveLimit = false, limit = 0 }) => {
  return (
    <Popover trigger={isLargerThan1000 ? 'hover' : 'click'}>
      <PopoverTrigger>
        <Box
          transition=" all .3s"
          sx={{
            height: '20px',
            width: '20px',
            marginLeft: '8px',
            alignSelf: 'start',
            color: isMeAboveLimit ? 'white' : 'black',
            borderRadius: '50%',
            border: !isMeAboveLimit ? '1px solid black' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: isMeAboveLimit ? '0 0 13px red;' : 'none',
            backgroundColor: isMeAboveLimit ? 'red' : 'white',
          }}
          _hover={{
            backgroundColor: isMeAboveLimit ? 'red' : 'white',
            boxShadow: 'none',
          }}
          role={isLargerThan1000 ? 'tooltip' : 'dialog'}
          aria-label="Info-bulle"
          >
          <BsQuestion size="17px" />
        </Box>
      </PopoverTrigger>
      <PopoverContent aria-describedby={label} sx={{backgroundColor: "white"}}>
        <PopoverBody
          id={label}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            fontWeight: '500',
            textAlign: 'left',
          }}>
          {content(label)}
          {isMeAboveLimit ? (
            <div
              style={{
                width: '100%',
                position: 'relative',
                fontFamily: 'Poppins',
                padding: '10px 15px',
                marginBottom: '15px',
              }}>
              <p style={{ margin: '0 ' }}>
                <span
                  style={{
                    color: 'red',
                    fontWeight: 800,
                    fontSize: 'inherit',
                  }}>
                  Attention:{' '}
                </span>
                le plafond de la micro-entreprise se situe à <span style={{ fontWeight: 800 }}>{limit.toLocaleString()} €</span>.
              </p>
              <p>
                Avec ce chiffre d'affaires, vous auriez jusqu'au{' '}
                <span style={{ fontWeight: 800, fontSize: 'inherit' }}>31/12/{new Date().getFullYear() + 1}</span> pour changer de statut.
              </p>
            </div>
          ) : (
            ''
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
