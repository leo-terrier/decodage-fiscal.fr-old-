import { Box, Table, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { FcHighPriority } from 'react-icons/fc';
import { FiArrowRightCircle } from 'react-icons/fi';
import cash from '../public/img/cash.png';

export const Bold = (props) => {
  return <span style={{ fontWeight: 700 }}>{props.children}</span>;
};

export default function impot_definition({ colors }) {
  const style = {
    article: {
      fontSize: '1.2rem',
      fontFamily: 'Poppins',
      color: colors.dBlue,
    },
    title: {
      fontWeight: 600,
      color: colors.dBlue,
      textDecoration: 'underline 2px',
      textUnderlineOffset: '5px',
      fontFamily: 'Poppins',
      marginTop: '40px',
      marginBottom: '60px',
      textAlign: 'center',
    },
    callout: {
      borderRadius: '10px',
      fontFamily: 'Nunito Sans',
      padding: '25px 30px',
      margin: '30px 0',
      boxShadow: 'rgba(0, 0, 0, 0.1) 1px 4px 6px -1px, rgba(0, 0, 0, 0.06) 1px 2px 4px -1px',
    },
  };

  const Arrowify = (props) => {
    const { size = '2.29rem', align = 'start' } = props;
    return (
      <div style={{ display: 'flex', marginTop: '10px', height: 'auto' }}>
        <Box
          marginRight={{ xs: '.5rem', sm: '.86rem' }}
          sx={{ width: size, display: 'flex', justifyContent: 'flex-start', minHeight: '100%', alignItems: align }}>
          <FiArrowRightCircle size={size} color={colors.orange} />
        </Box>
        <div style={{ display: 'flex' }}>
          <p className="noMarginTop" style={{ width: '100%' }}>
            {props.children}
          </p>
        </div>
      </div>
    );
  };

  return (
    <Box as="article" padding={{ xs: '0 20px', vs: '0 40px', sm: '0 60px' }} className="articleImpot" style={style.article}>
      <Text fontSize={{ xs: '28px', sm: '32px' }} as="h1" sx={style.title}>
        Le Fonctionnement de l'Impôt sur le Revenu
      </Text>
      <section>
        <h2>Qu’est-ce que l’impôt sur le revenu ? </h2>
        <p>
          L’impôt sur le revenu est un impôt collecté par le fisc français auprès des citoyens qui gagnent de l’argent. Si les gains réalisés au cours
          d'une année par une personne dépassent un certain montant, la personne devra payer de l'impôt sur le revenu au titre de cette année.
        </p>
        <p>
          <em>L'impôt sur le revenu a pour but de financer les services publics comme l'éducation, les gares, l'armée...</em>
        </p>

        <Box
          p={{ xs: '5px 10px', sm: '10px 20px' }}
          m={{ xs: '25px 10px', sm: '25px 0 0 20px' }}
          sx={{
            boxShadow: 'none',
            borderLeft: '2px solid' + colors.dBlue,
            backgroundColor: 'rgb(245, 255, 255)',
          }}>
          <p className="noMarginTop">L'impôt doit donc être distingué : </p>
          <div>
            <p className="noMarginTop" style={{ marginTop: '5px' }}>
              <Bold>...des cotisations sociales</Bold>. Les cotisations ne sont pas versées au fisc mais à l’urssaf, et ont pour but d’alimenter les
              caisses de sécurité sociale, afin de financer les services publics de santé et de retraite.
            </p>
            <p className="noMarginTop" style={{ marginTop: '5px' }}>
                <Bold>...de l'impôt sur les sociétés</Bold>
              , qui est prélevé sur les bénéfices des personnes morales (les sociétés) et non ceux des personnes physiques (les individus).
            </p>
          </div>
        </Box>
      </section>

      <section>
        <h2>Quels sont les revenus soumis à l'impôt ? </h2>
        <p>Sont concernés par l’impôt les revenus gagnés par une personne au cours d’une année.</p>
        <p>
          Constitue un revenu tout <Bold>accroissement de richesse</Bold>. Il s'agit dans la plupart des cas du salaire perçu par les salariés (bien
          qu'il existe d'autres types de revenus imposables).
        </p>
        <p>
          D'une part, sont soumis à l'impôt sur le revenu, tous les revenus dits <em>"professionnels”</em>, qui découlent de la profession des
          personnes.
        </p>
        <p>
          <em>
            Il s'agit par exemple <span>du salaire</span> des salariés, de la <span>rémunération</span> des dirigeants de société, ou du{' '}
            <span>bénéfice</span> des commerçants.
          </em>
        </p>
        <p>
          D'autre part, sont également considérés comme des accroissements de richesse les revenus dits du <em>"patrimoine"</em>, qui proviennent de
          biens qu'une personne a dans son patrimoine. Ces biens peuvent soit produire un revenu de manière régulière, soit générer une plus-value au
          moment de leur revente.
        </p>
        <p>
          <em>
            Il s'agit par exemple des <span>loyers</span> provenant de la location d'un appartement, des <span>dividendes</span> versés aux
            actionnaires d'une société, ou de la <span>plus-value</span> générée lors de la revente d'un objet rare.
          </em>
        </p>
        <Box
          p="20px"
          sx={{
            border: '2px dashed',
            backgroundColor: colors.lGray,
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            maxWidth: '800px',
            minWidth: '310px',

            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '30px auto',
          }}>
          <p className="noMarginTop">
            <Bold>
              L'impôt est donc déclenché par l’accroissement de richesse.
            </Bold>
          </p>
          <p>
            <Bold>Sans accroissement de richesse, la personne n’est pas imposable.</Bold>
          </p>
        </Box>
        <p className="small">
          <em>
            Ainsi, le fait de <Bold>laisser de l'argent</Bold> sur un compte, <Bold>de revendre un véhicule</Bold> sans plus-value ou encore
            <Bold> d’obtenir un remboursement</Bold> de prêt ne déclenchent pas d'imposition, faute d'enrichissement.
          </em>
        </p>

        <div>
          <p className="small">
            <Bold>
              <span>Pour information</span> :
            </Bold>{' '}
            Bien qu'il soit source d'enrichissement,{' '}
            <Bold>
              <span>l’héritage</span> n'est pas non plus soumis à l'impôt sur le revenu.
            </Bold>{' '}
            Il est en revanche soumis à <Bold> l'impôt sur les successions.</Bold>
          </p>
        </div>
      </section>

      <section>
        <h2>Combien faut-il gagner pour être imposable ?</h2>
        <Box display={{ xs: 'flex', sm: 'initial' }} sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Box float={{ xs: 'initial', sm: 'left' }} borderWidth={{ xs: '0', sm: '15px 30px' }} borderColor="transparent">
            <Table
              m={{ xs: '0 0 20px 0', sm: '0 20px 0 0' }}
              borderColor="black"
              id="table-ir"
              sx={{ textAlign: 'center', width: '320px', maxHeight: '271px', marginTop: '8px' }}>
              <thead>
                <tr>
                  <th style={{ width: '75%' }}>Tranche de revenu</th>
                  <th style={{ width: '25%' }}>Taux</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ backgroundColor: colors.lOrangeOpac }}>Jusqu'à 10 225 €</td>
                  <td style={{ backgroundColor: colors.lOrangeOpac }}>0%</td>
                </tr>
                <tr>
                  <td>De 10 226 € à 26 070 €</td>
                  <td>11%</td>
                </tr>
                <tr>
                  <td>De 26 071 € à 74 545 €</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>De 74 546 € à 160 336 €</td>
                  <td>41%</td>
                </tr>
                <tr>
                  <td>Au delà de 160 336 €</td>
                  <td>45%</td>
                </tr>
              </tbody>
            </Table>
          </Box>
          <Box mt={{ xs: '0', sm: '-10px' }}>
            <p className="noMarginTop">
              Pour être imposable à l’impôt sur le revenu, une personne seule doit gagner plus de <Bold>10 225 € par an.</Bold>
            </p>
            <p>
              En effet, en dessous de ce montant, le pourcentage d’impôt est de 0% (la personne est{' '}
              <Bold>
                <em>“non imposable”</em>
              </Bold>
              ).
            </p>
            <p>
              Toutefois, avec l'application du <Bold>quotien familial</Bold>,{' '}
              <Bold>
                ce seuil augmente lorsqu'une personne est <span>mariée</span>, <span>pacsée</span>, <span>ou a des personnes/enfants à charge</span>
              </Bold>
              .
            </p>
          </Box>
        </Box>
        <p>
          <Bold>Ainsi, deux personnes mariées ou pacsées</Bold> doivent gagner ensemble plus de <Bold>20 450 € par an</Bold> pour devoir de l'impôt.{' '}
          <Bold>Une personne seule ayant un enfant </Bold> devra en principe avoir un revenu supérieur à <Bold>15 337 € par an</Bold> pour être
          imposable. Enfin, <Bold>un couple marié ou pacsé ayant un enfant</Bold> devra gagner <Bold>30 675 € par an</Bold> ou plus pour devoir de
          l'impôt.
        </p>
      </section>
      <section>
        <h2>Comment se calcule l'impôt sur le revenu ?</h2>
        <p>Le calcul de l'impôt sur le revenu passe par différentes étapes :</p>
        <ol id="etape" style={{ listStyle: 'none', marginTop: '15px' }}>
          <li>
            <span className="red-digit">1)</span>Determiner les revenus imposables ;
          </li>
          <li id="option">
            <em>
              <span className="red-digit">2)</span>Pour une personne mariée, pacsée ou ayant des enfants : calculer le nombre de parts du quotien
              familial ;
            </em>
          </li>
          <li>
            <span className="red-digit">3)</span>Calculer l’impôt ;
          </li>
          <li>
            <span className="red-digit">4)</span>Soustraire les différents crédits d’impôt pour connaître le montant total de l’impôt dû ;
          </li>
        </ol>

        <div className="sous-section">
          <h3>
            <span className="red-digit">1) </span> Déterminer les revenus imposables
          </h3>

          <div className="sssection blue">
            <h4> Quels sont les différents types de revenu à déclarer ?</h4>
            <p>
              La plupart des gens n’ont qu’une seule source de revenu : leur salaire. Au moment de la déclaration de revenu, c’est donc{' '}
              <Bold>la somme des salaires “imposables” figurant sur leurs fiches de paie </Bold>
              (et non des salaire réellement versés) <Bold>qu’ils devront déclarer.</Bold> C'est cette somme servira de base pour le calcul de
              l'impôt.
            </p>
            <p>
              Toutefois, il arrive qu’un individu perçoive au cours d’une année des revenus de sources différentes (ex: plusieurs activités à temps
              partiels).
            </p>
            <p>
              Dans ce cas de figure,{' '}
              <Bold>
                les revenus s’additionnent au sein de ce que l’on appelle le <em>"revenu global"</em>
              </Bold>
              , pour donner la somme qui sera soumise à l’impôt sur le revenu.{' '}
            </p>
            <div style={{ ...style.callout, backgroundColor: colors.lGray }}>
              <p className="noMarginTop">
                <em>
                  <Bold>Exemple </Bold>
                </em>
                : si une personne retraitée perçoit, en plus de sa retraite, les loyers d’un appartement qu’elle a acquis et mis en location, elle
                devra déclarer chacun de ses deux revenus, et son revenu imposable la sera la somme des deux.{' '}
              </p>
            </div>
          </div>

          <div>
            <h4> Quelle est la part de mes revenus qui est imposable ?</h4>
            <p>
              Les revenus à déclarer sont les <Bold> revenus nets imposables.</Bold>
            </p>
            <p>
              Pour obtenir le revenu net imposable, on va déduire du revenu brut du revenu une grande majorité des cotisations payées à l’urssaf, et
              parfois aussi certaines charges, ce qui va donner le <Bold>revenu net imposable. </Bold>
            </p>
            <p>
              Afin d'aider à la déclaration de revenu des salariés, le dernier bulletin de paie de l'année (celui de décembre) comporte une rubrique
              qui permet de connaître <Bold>le montant total cumulé des salaires nets imposables perçus au cours de l'année. </Bold>
              C'est ce montant que les salariés doivent reporter sur leur déclaration de revenus.{' '}
            </p>
            <div style={{ ...style.callout, backgroundColor: colors.paleGreen, display: 'flex' }}>
              <Box display={{ xs: 'none', sm: 'initial' }} style={{ minWidth: '40px', maxWidth: '40px', marginRight: '2%' }}>
                <Image src={cash} style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
              <p className="noMarginTop small">
                <em>
                  <Bold>Le saviez-vous ? </Bold>
                </em>
                <Bold>Les salariés</Bold> (ainsi que les dirigeants de société)
                <Bold> bénéficient automatiquement d’un abattement de 10 % sur leur revenu imposable</Bold>, au titre des
                <Bold> frais professionnels.</Bold> Ainsi, le salaire déclaré est automatiquement réduit de 10% par le service des impôts, sans
                justification ou action à fournir de la part du contribuable.
              </p>
            </div>
          </div>
          <div>
            <h4> Quels revenus vont servir de base pour le calcul de l'impôt ?</h4>
            <p>
              En principe, tous les revenus d'une personne s'additionnent pour former le
              <Bold>
                <em> "revenu global"</em>
              </Bold>{' '}
              qui sert de base au calcul de l'impôt.
            </p>
            <p className="small">
              <em>
                C'est le cas du retraité qui loue des appartements en plus de toucher sa retraite. Dans sa déclaration de revenu, il devra reporter
                chacun de ses revenus, afin que son impôt annuel soit calculé sur le montant total.
              </em>
            </p>
            <p>
              <Bold>
                Une fois le revenu global connu, on va pouvoir déterminer l'impôt dû en appliquant à chaque tranche de revenu le taux d'imposition qui
                lui correspond.
              </Bold>
            </p>
            <div className="warning" style={{ ...style.callout, backgroundColor: colors.lOrangeOpac, display: 'flex' }}>
              <Box display={{ xs: 'none', sm: 'initial' }} style={{ marginRight: '2%' }}>
                <FcHighPriority size="40px"></FcHighPriority>
              </Box>
              <div>
                <p>
                  Toutefois, il existe <Bold>deux exceptions notables </Bold>à ce principe :
                </p>
                <p>
                  1){' '}
                  <span>
                    <Bold>Les produits financiers</Bold>
                  </span>{' '}
                  (les <Bold>dividendes</Bold>, les <Bold>intérêts</Bold> perçus, et les <Bold>plus-value sur titre</Bold>).
                </p>
                <p>
                  2){' '}
                  <span>
                    <Bold>Les plus-values immobilières</Bold>
                  </span>
                </p>

                <p>
                  Ces deux types de revenu ne vont pas intégrer le revenu global ni recevoir un taux d'imposition progressif en fonction du montant.
                </p>
                <p>A la place, leur sera appliqué un taux unique et fixe, peu importe leur montant.</p>
                <p>
                  <em>
                    Ce taux est de <Bold>12,8% pour les produits financiers</Bold> et de <Bold>19% pour les plus-values immobilières</Bold>, auxquels
                    il faut ajouter <Bold> 17,2% de prélèvements sociaux dans les deux cas</Bold>.
                  </em>{' '}
                  Les dividendes sont donc taxés à 30% (aussi appelé "flat tax").
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sous-section quotien">
          <h3>
            <span className="red-digit">2)</span> Calculer le quotien familial
          </h3>

          <p>
            Afin de calculer l’impôt des personnes mariées, pacsées, ou ayant des enfants, l’étape du quotien familial est nécessaire.{' '}
            <em>Les personnes célibataires sans enfant peuvent passer directement à la prochaine étape.</em>
          </p>
          <h4>Le nombre de parts du quotien familial</h4>
          <p>
            Le nombre de parts du foyer est la notion clé qui permet de déterminer l’allègement fiscal accordé par l'Etat, en fonction du nombre de
            personnes à charge.
          </p>
          <div style={{ marginTop: '25px' }}>
            <p>
              <Bold>Calcul du nombre de parts :</Bold>
            </p>

            <Arrowify>
              Lorsque le foyer fiscal est constitué par <Bold>un couple marié ou pacsé</Bold>, chaque membre du couple vaut pour <Bold>une part</Bold>{' '}
              (foyer = 2 parts)
            </Arrowify>

            <Arrowify>
              Lorsque le foyer fiscal est constitué par <Bold>une personne célibataire</Bold>, elle vaut pour <Bold>une part</Bold> (foyer = 1 part)
            </Arrowify>
            <Arrowify>
              <Bold>Les enfants</Bold> (et les autres personnes à charge) <Bold>ajoutent une demi-part</Bold> jusqu’au troisième
            </Arrowify>
            <Arrowify>
              A partir du <Bold> troisième enfant</Bold> (<em>ou personne à charge</em>)
              <Bold> une part entière est accordée à chaque nouvel enfant</Bold> (<em>ou personne à charge</em>)
            </Arrowify>
          </div>
          <div
            style={{
              ...style.callout,
              backgroundColor: colors.lGray,
              width: '50%',
              minWidth: '320px',
              maxWidth: '485px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <p className="noMarginTop">
              <Bold>Exemples :</Bold>
            </p>
            <p className="noMarginTop">
              Parent célibataire + 1 enfants = <Bold>1,5 parts</Bold>{' '}
            </p>
            <p className="noMarginTop">
              Couple pacsé ou marié + 2 enfants = <Bold>3 parts</Bold>
            </p>
            <p className="noMarginTop">
              Couple pacsé ou marié + 3 enfants = <Bold>4 parts</Bold>
            </p>
          </div>
          <h4>Le calcul de l'impôt avec application du quotien familial</h4>
          <p>Au lieu de calculer l’impôt à partir du revenu global, on va calculer l’impôt à partir du revenu par part.</p>
          <p>L’impôt total qui sera dû par le foyer s’obtient ensuite en multipliant l’impôt dû pour une seule part, par le nombre total de parts.</p>
          <ul className="list" style={{ width: '60%', minWidth: '290px', margin: '0 auto' }}>
            <li>
              <Text fontSize={{ xs: '1rem', vs: 'inherit' }}>
                <Bold>Impôt par part =</Bold> Revenu par part <Bold>x</Bold> les différents taux du barème de l’impôt sur le revenu
              </Text>
            </li>
            <li>
              <Text fontSize={{ xs: '1rem', vs: 'inherit' }} sx={{ marginTop: '12px' }}>
                <Bold>Impôt dû par le foyer =</Bold> Impôt par part <Bold>x</Bold> nombre de parts
              </Text>
            </li>
          </ul>
          <div>
            <Text fontSize={{ xs: '1rem', vs: 'inherit' }}>
              <Bold>Attention</Bold>: l'économie d'impôt d'impôt maximale qu'il est permis de réaliser grâce aux enfants se limite à 1 592 € par
              demi-part supplémentaire. C'est qu'on appelle le{' '}
              <em>
                <Bold>"plafonnement du quotien familial"</Bold>
              </em>
              .
            </Text>
          </div>
        </div>

        <div className="sous-section">
          <h3>
            <span className="red-digit">3)</span> Le calcul de l'impôt sur le revenu
          </h3>
          <p>
            L'impôt sur le revenu est un impôt
            <em>
              <Bold> progressif </Bold>
            </em>
            : son taux est plus élevé sur la part des revenus la plus élevée.
          </p>
          <p>
            Le barème de l'impôt sur le revenu comporte <Bold>5 tranches </Bold>
            qui correspondent chacune à un pourcentage d'imposition.
          </p>
          <p>Pour calculer l'impôt, on prend le revenu imposable et on applique les pourcentages correspondant aux tranches du barème.</p>

          <Box
            fontSize={{ xs: '1rem', sm: 'inherit' }}
            className="ex-"
            sx={{ borderRadius: '10px', fontFamily: 'Nunito Sans', margin: '30px 0', backgroundColor: 'rgb(225, 250, 255)', color: 'rgb(2, 2, 93)' }}
            p={{ xs: '14px', sm: '3%' }} >
            <h3 style={{ marginTop: 0, textDecoration: 'underline 1.5px', textUnderlineOffset: '4px' }}>Exemples chiffrés</h3>

            <Text as="h5" className="example" mt={{ xs: '30px', sm: '45px' }} fontSize={{ xs: '1.15rem', sm: '1.3rem' }}>
              Personne célibataire ayant un revenu imposable de 45 000 € par an :
            </Text>
            <Box ml={{ xs: '0', sm: '20px' }} mt={{ xs: '10px', sm: '20px' }}>
              <Arrowify size={'20px'} align={'center'}>
                Pour la tranche allant de 0 à 10 225 € de revenus
              </Arrowify>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '7px' }}>
                <Text fontSize={{ xs: '.9rem', vs: 'inherit' }} className="noMarginTop">
                  <Bold>0 € d'impôt </Bold> (10 225 € x 0%){' '}
                </Text>
              </Box>
              <Arrowify size={'20px'} align={'center'}>
                Pour la tranche allant de 10 226 € à 26 070 € de revenus
              </Arrowify>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '7px' }}>
                <Text fontSize={{ xs: '.9rem', vs: 'inherit' }} className="noMarginTop">
                  <Bold>1 743 € d'impôt </Bold> [(26 070 € - 10 226 €) x 11%]
                </Text>
              </Box>
              <Arrowify size={'20px'} align={'center'}>
                Pour la tranche allant de 26 071 € jusqu’au revenu imposable
              </Arrowify>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '7px' }}>
                <Text fontSize={{ xs: '.9rem', vs: 'inherit' }} className="noMarginTop">
                  <Bold>5 679 € d’impôt</Bold> [(45 000 € - 26 071 €) x 30%]
                </Text>
              </Box>
              <Text className="example" marginTop={{ xs: '25px', sm: '45px' }} fontSize={{ xs: '1.15rem', sm: '1.3rem' }}>
                <Bold>
                  <span style={{ marginTop: 0, textDecoration: 'underline 1px', textUnderlineOffset: '3px' }}>Impôt</span> :
                  <span style={{ color: colors.orange }}> 7 422 €</span>
                </Bold>{' '}
                (0 + 1 743 + 5 679)
              </Text>
            </Box>

            <Text as="h5" className="example" mt={{ xs: '30px', sm: '45px' }} fontSize={{ xs: '1.15rem', sm: '1.3rem' }}>
              Couple pacsé ayant 2 enfants ainsi qu’un revenu global annuel de 57 000 € :
            </Text>
            <p>Nombre de parts : 3 (1 pour chaque parent et 0,5 pour chaque enfant)</p>
            <p>Revenu par part : 19 000 € (57 000 / 3)</p>
            <p>
              <Bold>Calcul de l’impôt pour une part :</Bold>
            </p>
            <Box ml={{ xs: '0', sm: '20px' }} mt={{ xs: '10px', sm: '25px' }}>
              <Arrowify size={'20px'} align={'center'}>
                Pour la tranche allant de 0 à 10 225 € de revenus
              </Arrowify>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '7px' }}>
                <Text fontSize={{ xs: '.9rem', vs: 'inherit' }} className="noMarginTop">
                  <Bold>0 € d'impôt </Bold>(10 225 € x 0%)
                </Text>
              </Box>
              <Arrowify size="20px">Pour la tranche allant de 10 226 €jusqu’au revenu imposable</Arrowify>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '7px' }}>
                <Text fontSize={{ xs: '.9rem', vs: 'inherit' }} className="noMarginTop">
                  <Bold>965 € d’impôt</Bold>[(19 000 € - 10 226 €) x 11%]
                </Text>
              </Box>
              <Text className="example" marginTop={{ xs: '25px', sm: '45px' }} fontSize={{ xs: '1.15rem', sm: '1.3rem' }}>
                <Bold>
                  <span style={{ marginTop: 0, textDecoration: 'underline 1px', textUnderlineOffset: '3px' }}>Impôt global du foyer</span> :
                  <span style={{ color: colors.orange }}> 2 895 €</span>
                </Bold>{' '}
                (965 € x 3)
              </Text>
            </Box>

            <p className="small">
              <Bold>NB:</Bold> A cause du mécanisme du plafonnement du quotien familial, en présence d’enfants, il faut en principe calculer l’impôt
              avec le plafonnement puis sans le plafonnement, et retenir la valeur la plus élevée.{' '}
              <a style={{ textDecoration: 'underline' }} href="https://www.economie.gouv.fr/particuliers/quotient-familial">
                Plus d'information sur le plafonnement du quotien familial.
              </a>
            </p>
          </Box>

          <h3>
            <span className="red-digit">4)</span> L'application des éventuels crédits et réductions d'impôt.
          </h3>
          <p>
            Une fois le montant de l'impôt connu, il est possible de déterminer le montant final de l'impôt qui sera dû, en soustrayant les éventuels
            crédits et réductions d'impôts
          </p>
          <p>
            Les crédits d'impôt comme les réductions d'impôt permettent, dans des situations prévues par la loi, de diminuer directement son impôt de
            certaines charges, et ainsi d'en faire peser le coût sur le trésor public.
          </p>
          <p>
            A la différence d'un crédit d'impôt, <Bold>une réduction d'impôt</Bold> ne donne pas lieu à remboursement par le fisc si l'impôt dû n'est
            finalement pas suffisant pour épuiser le crédit d'impôt. L'impôt est donc ramené à 0 €. Il s'agit par exemple des{' '}
            <Bold>dons faits aux associations caritatives</Bold>.
          </p>
          <p>
            A l'inverse, <Bold>un crédit d'impôt</Bold> conduit à une prise en charge systématique par le fisc (si le crédit d'impôt est supérieur à
            l'impôt dû, l'Etat rembourse la différence).Parmis les différents crédit d'impôt, on peut citer le{' '}
            <Bold>crédit d'impôt pour l'emploi d'un salarié à domicile</Bold>, ou encore <Bold>l'investissement locatif Pinel</Bold>.
          </p>
          <p className="small">
            <a href="https://www.economie.gouv.fr/particuliers/impot-revenu#rici" style={{ textDecoration: 'underline' }}>
              Plus d'information sur les différents crédits et réductions d'impôts.
            </a>
          </p>
        </div>
      </section>
    </Box>
  );
}
