import { useMediaQuery } from '@chakra-ui/react';
import { format } from '../../util/helper';

export const SituationFiscalCorp = ({ results, colors }) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');

  const tauxGlobalImpot = () => {
    if (!((results.IR + results.IRD2) / (results.revenuImposable + results.revenuImposableD2) > 0)) {
      return '0%';
    } else {
      return (((results.IR + results.IRD2) / (results.revenuImposable + results.revenuImposableD2)) * 100).toFixed(2) + '%';
    }
  };

  if (results.socialForm !== 'SAS' || !Object.keys(results).length || !isLargerThan1000) {
    return;
  }
  if (results.isMarried) {
    return (
      <section
        className="foyer"
        style={{
          width: '90%',
          minWidth: '400px',
          maxWidth: '487px',
          borderRadius: '10px',
          position: 'relative',
          fontFamily: 'Nunito Sans',
          padding: '10px',
          color: colors.dBlue,
          backgroundColor: colors.paleGreen,
          boxShadow: 'rgba(0, 0, 0, 0.1) 1px 4px 6px -1px, rgba(0, 0, 0, 0.06) 1px 2px 4px -1px',
        }}>
        <h2
          style={{
            color: colors.dBlue,
            textAlign: 'center',
            fontWeight: '800',
            fontSize: '1.2rem',
          }}>
          Situation fiscale
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3px',
            fontWeight: 'bold',
          }}>
          <p>Taux global d'imposition</p>
          <p>{tauxGlobalImpot()}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3px',
          }}>
          <p>Revenu net imposable du foyer</p>
          <p>{format(results.revenuImposable + results.revenuImposableD2) || '0 '}€</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3px',
          }}>
          <p>Impôt</p>
          <p>{format(results.IR + results.IRD2) || '0 '}€</p>
        </div>
        <div
          style={{
            fontStyle: 'italic',
            display: 'flex',
            fontSize: '.92rem',
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '2px',
            minWidth: '50%',
          }}>
          <p>- Dont freelance</p>
          <p> {format(results.IR) || 0}€</p>
          <p>
            ({!results.revenuImposable ? '0€ x ' : format(results.revenuImposable) + '€ x '}
            {tauxGlobalImpot()})
          </p>
        </div>
        <div
          style={{
            fontStyle: 'italic',
            display: 'flex',
            fontSize: '.92rem',
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '2px',
            minWidth: '50%',
          }}>
          <p>- Dont conjoint</p>

          <p> {format(results.IRD2) || 0}€</p>
          <p>
            ({!results.revenuImposableD2 ? '0€ x ' : format(results.revenuImposableD2) + '€ x '}
            {tauxGlobalImpot()})
          </p>
        </div>
      </section>
    );
  }
  return (
    <section
      className="foyer"
      style={{
        width: '90%',
        minWidth: '400px',
        maxWidth: '487px',
        borderRadius: '10px',
        position: 'relative',
        fontFamily: 'Nunito Sans',
        padding: '10px',
        color: colors.dBlue,
        backgroundColor: colors.paleGreen,
        boxShadow: 'rgba(0, 0, 0, 0.1) 1px 4px 6px -1px, rgba(0, 0, 0, 0.06) 1px 2px 4px -1px',
      }}>
      <h2
        style={{
          color: colors.dBlue,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: '1.2rem',
        }}>
        Situation fiscale
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3px',
          fontWeight: 'bold',
        }}>
        <p>Taux global d'imposition</p>
        <p>{((results.IR / results.revenuImposable) * 100).toFixed(2) > 0 ? ((results.IR / results.revenuImposable) * 100).toFixed(2) : '- '}%</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3px',
        }}>
        <p>Revenu net imposable</p>
        <p>{format(results.revenuImposable + results.revenuImposableD2)} €</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3px',
        }}>
        <p>Impôt</p>
        <p>{format(results.IR + results.IRD2)} €</p>
      </div>
    </section>
  );
};
