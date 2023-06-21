import { Box, useMediaQuery } from '@chakra-ui/react';
import { format } from '../../util/helper';

export const Synthese = ({ results, colors }) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const isResults = Object.keys(results).length;
  const { dBlue, lGray, paleGreen } = colors;

  const {
    isMarried,
    socialForm,
    revenuImposable,
    revenuNet,
    CA,
    charges,
    cotisations,
    IS,
    IR,
    flatTax,
    remuneration,
    dividende,
    revenuImposableD2,
    IRD2,
  } = results;

  const getPercentage = value => {
    if (value < CA) {
      return ((value / CA) * 100).toFixed(2);
    } else {
      return 100;
    }
  };

  const style = {
    section: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '95%',
      minWidth: '340px',
      maxWidth: '487px',
    },
    corpSynthesises: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    categoryTop: {
      width: '100%',
      borderRadius: '10px',
      position: 'relative',
      fontFamily: 'Nunito Sans',
      padding: '10px 15px',
      color: dBlue,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 1px 4px 6px -1px, rgba(0, 0, 0, 0.06) 1px 2px 4px -1px',
    },
    category: {
      width: '100%',
      borderRadius: '10px',
      position: 'relative',
      fontFamily: 'Nunito Sans',
      padding: '10px 15px',
      marginTop: !isResults || socialForm !== 'SARL' ? '34px' : '26px',
      color: dBlue,
      boxShadow:
        'rgba(0, 0, 0, 0.1) 1px 4px 6px -1px, rgba(0, 0, 0, 0.06) 1px 2px 4px -1px',
    },
    categoryTitle: {
      color: dBlue,
      textAlign: 'center',
      fontWeight: 700,
      fontFamily: 'Nunito Sans',
    },
    lineContainingDiv: { marginTop: '.5rem' },
    lineDiv: {
      marginTop: '.3rem',
      borderBottom: '1px dashed',
      display: 'flex',
    },
    amountDiv: {
      width: '78%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    percentage: {
      textAlign: 'right',
      width: '22%',
    },
    revenuNet: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    lineImpot: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '.17rem',
    },
    smallLineImpot: {
      fontStyle: 'italic',
      display: 'flex',
      fontSize: '.92rem',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '2px',
      minWidth: '50%',
    },
    lineDivMinus: {
      marginTop: '.3rem',
      borderBottom: '1px dashed',
      display: 'flex',
      fontStyle: 'italic',
    },
    revenuPBold: {
      fontSize: '1.05rem',
      fontWeight: 700,
    },
  };

  const tauxGlobalImpot = () => {
    if (
      !(
        (results.IR + results.IRD2) /
          (results.revenuImposable + results.revenuImposableD2) >
        0
      )
    ) {
      return 0;
    } else {
      return (
        ((results.IR + results.IRD2) /
          (results.revenuImposable + results.revenuImposableD2)) *
        100
      ).toFixed(2);
    }
  };

  const SyntheseDefault = () => {
    return (
      <section
        className="synthese"
        style={{
          ...style.categoryTop,
          backgroundColor: colors.xxlBlueGray,
        }}
      >
        <h2 style={{ ...style.categoryTitle, fontSize: '1.4rem' }}>Résultat</h2>
        <div style={style.lineContainingDiv}>
          <div style={style.lineDiv}>
            <div style={style.amountDiv}>
              <p style={style.revenuPBold}>Chiffre d'affaires</p>
              <p style={style.revenuPBold}>- €</p>
            </div>
            <p style={{ ...style.percentage, ...style.revenuPBold }}>- %</p>
          </div>
          <div style={style.lineDiv}>
            <div style={style.amountDiv}>
              <p>Charges</p>
              <p>- €</p>
            </div>
            <p style={style.percentage}>- %</p>
          </div>
          <div style={style.lineDiv}>
            <div style={style.amountDiv}>
              <p>Cotisations</p>
              <p>- €</p>
            </div>
            <p style={style.percentage}>- %</p>
          </div>
          <div style={{ ...style.lineDiv, borderBottom: '1px solid' }}>
            <div style={style.amountDiv}>
              <p>Impôt</p>
              <p>- €</p>
            </div>
            <p style={style.percentage}>- %</p>
          </div>
          <div style={{ ...style.lineDiv, border: 'none' }}>
            <div style={style.amountDiv}>
              <p style={style.revenuNet}>Revenu net</p>
              <p style={style.revenuNet}>- €</p>
            </div>
            <p style={{ ...style.percentage, ...style.revenuNet }}>- %</p>
          </div>
        </div>
      </section>
    );
  };

  const SituationFiscaleDefault = () => {
    return (
      <section
        className="foyer"
        style={{ ...style.category, backgroundColor: paleGreen }}
      >
        <h2
          style={{
            ...style.categoryTitle,
            fontSize: '1.2rem',
          }}
        >
          Situation fiscale
        </h2>
        <div
          style={{
            ...style.lineImpot,
            fontWeight: 700,
          }}
        >
          <p>Taux global d'imposition</p>
          <p>- %</p>
        </div>
        <div style={style.lineImpot}>
          <p>Revenu net imposable</p>
          <p>- €</p>
        </div>
        <div style={style.lineImpot}>
          <p>Impôt</p>
          <p>- €</p>
        </div>
      </section>
    );
  };
  const SyntheseME = () => {
    return (
      <section
        className="synthese"
        style={{
          ...style.categoryTop,
          backgroundColor: colors.xxlBlueGray,
        }}
      >
        <h2 style={{ ...style.categoryTitle, fontSize: '1.4rem' }}>
          {' '}
          Résultat
        </h2>
        <div style={style.lineContainingDiv}>
          <div style={style.lineDiv}>
            <div style={style.amountDiv}>
              <p style={style.revenuPBold}>Chiffre d'affaires</p>
              <p style={style.revenuPBold}>{format(CA)} €</p>
            </div>
            <p style={{ ...style.percentage, ...style.revenuPBold }}>100%</p>
          </div>
          <div style={style.lineDiv}>
            <div style={style.amountDiv}>
              <p>Charges</p>
              <p>{format(charges) || 0} €</p>
            </div>
            <p style={style.percentage}>{getPercentage(charges)}%</p>
          </div>
          <div style={style.lineDiv}>
            <div style={style.amountDiv}>
              <p>Cotisations</p>
              <p>{format(cotisations)} €</p>
            </div>
            <p style={style.percentage}>{getPercentage(cotisations)}%</p>
          </div>
          <div style={{ ...style.lineDiv, borderBottom: '1px solid' }}>
            <div style={style.amountDiv}>
              <p>Impôt</p>
              <p>{format(IR) || 0} €</p>
            </div>
            <p style={style.percentage}>{getPercentage(IR)}%</p>
          </div>
          <div style={{ ...style.lineDiv, borderBottom: 'none' }}>
            <div style={style.amountDiv}>
              <p style={style.revenuNet}>Revenu net</p>
              <p style={style.revenuNet}>{format(revenuNet)} €</p>
            </div>
            <p style={{ ...style.percentage, ...style.revenuNet }}>
              {getPercentage(revenuNet)}%
            </p>
          </div>
        </div>
      </section>
    );
  };

  const PrelevementsObligatoires = () => {
    if (socialForm !== 'SAS') {
      return (
        <section
          className="prelevements"
          style={{
            ...style.category,
            backgroundColor: lGray,
          }}
        >
          <h2
            style={{
              ...style.categoryTitle,
              fontSize: '1.2rem',
            }}
          >
            Total des prélèvements obligatoires
          </h2>
          {/* //https://wave.webaim.org/report#/https://decodage-fiscal.fr/
           */}{' '}
          <div
            style={{
              ...style.lineDiv,
              border: 'none',
            }}
          >
            <div style={style.amountDiv}>
              <p>(Cotisations + Impôt)</p>
              <p>{!isResults ? '- €' : format(cotisations + IR) + ' €'}</p>
            </div>
            <p
              style={{
                ...style.percentage,
              }}
            >
              {!isResults ? '- %' : getPercentage(cotisations + IR) + '%'}
            </p>
          </div>
        </section>
      );
    } else {
      return (
        <section
          className="prelevements"
          style={{
            ...style.category,
            backgroundColor: lGray,
          }}
        >
          <h2
            style={{
              color: colors.dBlue,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: '1.2rem',
            }}
          >
            Total des prélèvements obligatoires
          </h2>

          <div
            style={{
              ...style.lineDiv,
              border: 'none',
              fontSize: CA > 999999 ? '.89rem' : '.92rem',
              justifyContent: 'space-between',
            }}
          >
            <p>(Cotisation + IS + Impôt + Flat tax)</p>
            <p>{format(cotisations + IR + flatTax + IS) + '€'}</p>

            <p>{getPercentage(cotisations + IR + flatTax + IS) + '%'}</p>
          </div>
        </section>
      );
    }
  };

  const SituationFiscaleMESARL = () => {
    return (
      <section
        className="foyer"
        style={{ ...style.category, backgroundColor: paleGreen }}
      >
        <h2
          style={{
            ...style.categoryTitle,
            fontSize: '1.2rem',
          }}
        >
          Situation fiscale
        </h2>
        <div
          style={{
            ...style.lineImpot,
            fontWeight: 700,
          }}
        >
          <p>Taux global d'imposition</p>
          <p>{tauxGlobalImpot()}%</p>
        </div>
        <div style={style.lineImpot}>
          <p>Revenus nets imposables {isMarried && 'du foyer'}</p>
          <p>
            {isMarried
              ? format(revenuImposable + revenuImposableD2)
              : format(revenuImposable)}{' '}
            €
          </p>
        </div>
        <div style={style.lineImpot}>
          <p>Impôt</p>
          <p>{format(IR + IRD2) || 0} €</p>
        </div>
        {isMarried ? (
          <div>
            <div style={style.smallLineImpot}>
              <p>- Dont freelance :</p>
              <p> {format(IR) || 0}€</p>
              <p>
                ({format(revenuImposable) + '€ x ' + tauxGlobalImpot()}
                %)
              </p>
            </div>
            <div style={style.smallLineImpot}>
              <p>- Dont conjoint :</p>

              <p> {format(IRD2) || 0}€</p>
              <p>
                ({(format(revenuImposableD2) || 0) + '€ x ' + tauxGlobalImpot()}
                %)
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
      </section>
    );
  };
  const SyntheseSARL = () => {
    return (
      <div className="corpSynthesises" style={style.corpSynthesises}>
        <section
          className="synthese"
          style={{
            ...style.categoryTop,
            backgroundColor: colors.xxlBlueGray,
            width: '100%',
          }}
        >
          <h2 style={{ ...style.categoryTitle, fontSize: '1.3rem' }}>
            Résultat de la société
          </h2>

          <div style={style.lineContainingDiv}>
            <div style={style.lineDiv}>
              <div style={style.amountDiv}>
                <p style={style.revenuPBold}>Chiffre d'affaires</p>
                <p style={style.revenuPBold}>{format(CA)} €</p>
              </div>
              <p style={{ ...style.percentage, ...style.revenuPBold }}>100%</p>
            </div>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>- Charges</p>
                <p> {format(charges) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(charges)}%</p>
            </div>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>- Cotisations</p>
                <p> {format(cotisations) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(cotisations)}%</p>
            </div>
            <div style={{ ...style.lineDivMinus, borderBottom: 'solid 1px' }}>
              <div style={style.amountDiv}>
                <p>- Rémunération</p>
                <p> {format(remuneration) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(remuneration)}%</p>
            </div>
            <div
              style={{
                ...style.lineDiv,
                borderBottom: 'none',
              }}
            >
              <div style={style.amountDiv}>
                <p style={style.revenuPBold}>Résultat net comptable</p>
                <p style={style.revenuPBold}>
                  {format(
                    Math.abs(CA - charges - cotisations - remuneration) < 2
                      ? 0
                      : CA - charges - cotisations - remuneration
                  )}{' '}
                  €
                </p>
              </div>
              <p style={{ ...style.percentage, ...style.revenuPBold }}>0%</p>
            </div>
          </div>
        </section>
        <section
          style={{
            ...style.category,
            backgroundColor: colors.xxlBlueGray,
            width: '100%',
          }}
        >
          <h2 style={{ ...style.categoryTitle, fontSize: '1.3rem' }}>
            Résultat du freelance
          </h2>
          <div style={style.lineContainingDiv}>
            <div style={{ ...style.lineDivMinus, fontStyle: 'none' }}>
              <div style={style.amountDiv}>
                <p>Rémunération</p>
                <p>{format(remuneration) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(remuneration)}%</p>
            </div>
            <div style={{ ...style.lineDivMinus, borderBottom: 'solid 1px' }}>
              <div style={style.amountDiv}>
                <p>- Impôt sur le revenu</p>
                <p> {format(IR) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(IR)}%</p>
            </div>
            <div style={{ ...style.lineDiv, borderBottom: 'none' }}>
              <div style={style.amountDiv}>
                <p style={style.revenuNet}>Revenu net</p>
                <p style={style.revenuNet}>{format(revenuNet)} €</p>
              </div>
              <p style={{ ...style.percentage, ...style.revenuNet }}>
                {revenuNet > 0 ? getPercentage(revenuNet) : '- '}%
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const SyntheseSAS = () => {
    return (
      <div className="corpSynthesises" style={style.corpSynthesises}>
        <section
          className="synthese"
          style={{
            ...style.categoryTop,
            backgroundColor: colors.xxlBlueGray,
            justifyContent: 'space-between',
          }}
        >
          <h2 style={{ ...style.categoryTitle, fontSize: '1.3rem' }}>
            Résultat de la société
          </h2>

          <div style={style.lineContainingDiv}>
            <div style={style.lineDiv}>
              <div style={style.amountDiv}>
                <p style={style.revenuPBold}>Chiffre d'affaires</p>
                <p style={style.revenuPBold}>{format(CA)} €</p>
              </div>
              <p style={{ ...style.percentage, ...style.revenuPBold }}>100%</p>
            </div>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>- Charges</p>
                <p> {format(charges) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(charges)}%</p>
            </div>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>- Cotisations</p>
                <p> {format(cotisations) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(cotisations)}%</p>
            </div>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>- Rémunération</p>
                <p> {format(remuneration) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(remuneration)}%</p>
            </div>
            <div style={{ ...style.lineDivMinus, borderBottom: 'solid 1px' }}>
              <div style={{ ...style.amountDiv }}>
                <p>- Impôt sur les sociétés</p>
                <p> {format(IS) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(IS)}%</p>
            </div>
            <div
              style={{
                ...style.lineDiv,
                borderBottom: 'none',
              }}
            >
              <div style={style.amountDiv}>
                <p style={style.revenuPBold}>Bénéfice distribuable</p>
                <p style={style.revenuPBold}>
                  {format(dividende + flatTax) || 0} €
                </p>
              </div>

              <p style={{ ...style.percentage, ...style.revenuPBold }}>
                {getPercentage(dividende + flatTax)}%
              </p>
            </div>
          </div>
        </section>
        <Box
          as="section"
          fontSize={{ xs: CA > 999999 ? '.95rem' : '1rem', vs: '1rem' }}
          sx={{
            ...style.category,
            backgroundColor: colors.xxlBlueGray,
          }}
        >
          <h2 style={{ ...style.categoryTitle, fontSize: '1.3rem' }}>
            Résultat du freelance
          </h2>
          <div style={style.lineContainingDiv}>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>Rémunération</p>
                <p>{format(remuneration) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(remuneration)}%</p>
            </div>
            <div style={style.lineDivMinus}>
              <div style={style.amountDiv}>
                <p>- Impôt sur le revenu</p>
                <p> {format(IR) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(IR)}%</p>
            </div>
            <div style={style.lineDiv}>
              <div style={style.amountDiv}>
                <p>Versement de dividendes</p>
                <p>{format(dividende + flatTax) || 0} €</p>
              </div>
              <p style={style.percentage}>
                {getPercentage(dividende + flatTax)}%
              </p>
            </div>
            <div style={{ ...style.lineDivMinus, borderBottom: '1px solid' }}>
              <div style={style.amountDiv}>
                <p>- Flat tax sur dividendes</p>
                <p> {format(flatTax) || 0} €</p>
              </div>
              <p style={style.percentage}>{getPercentage(dividende)}%</p>
            </div>
            <div
              style={{
                ...style.lineDiv,
                borderBottom: 'none',
              }}
            >
              <div style={style.amountDiv}>
                <p style={style.revenuNet}>Revenu net</p>
                <p style={style.revenuNet}>{format(revenuNet)} €</p>
              </div>
              <p style={{ ...style.percentage, ...style.revenuNet }}>
                {getPercentage(revenuNet)}%
              </p>
            </div>
          </div>
        </Box>
      </div>
    );
  };

  const SituationFiscale = () => {
    if (!isResults) {
      return SituationFiscaleDefault();
    }
    if (socialForm !== 'SAS') {
      return SituationFiscaleMESARL();
    }
    if (socialForm === 'SAS' && !isLargerThan1000) {
      return SituationFiscaleMESARL();
    }
  };

  return (
    <Box width={{ xs: '95%', sm: '90%', '2xl': '85%' }} style={style.section}>
      {!isResults
        ? SyntheseDefault()
        : socialForm === 'ME'
        ? SyntheseME()
        : socialForm === 'SARL'
        ? SyntheseSARL()
        : SyntheseSAS()}

      {PrelevementsObligatoires()}
      {SituationFiscale()}
    </Box>
  );
};
