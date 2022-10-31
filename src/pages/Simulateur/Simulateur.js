import { Spinner, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Chart } from '../../components/Chart/Chart';
import { ChartSm } from '../../components/Chart/ChartSm.js';
import { ChartXs } from '../../components/Chart/ChartXs';
import { Form } from '../../components/Form/Form';
import ShareButtons from '../../components/ShareButtons/ShareButtons';
import { SituationFiscalCorp } from '../../components/Synthese/SituationFoyerSAS';
import { Synthese } from '../../components/Synthese/Synthese';
import { TJM } from '../../components/TJM/TJM';

export const Simulateur = ({ colors, results, setResults, tabIndex, setTabIndex }) => {
  const [loadingDoubleSASComp, setLoadingDoubleSASComp] = useState(false);
  const [isLargerThan1050] = useMediaQuery('(min-width: 1050px)');
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

  const router = useRouter();
  const { compensation } = router.query;

  const fiscalCorp = () => {
    if (Object.keys(results).length && results.socialForm !== 'ME') {
      return <SituationFiscalCorp results={results} colors={colors} />;
    }
  };

  let chartResults = () => {
    if (Object.keys(results).length) {
      return {
        socialForm: results.socialForm,
        CA: results.CA,
        charges: results.charges,
        cotisations: results.cotisations,
        IS: results.IS,
        IR: results.IR,
        flatTax: results.flatTax,
        dividende: results.dividende,
        remuneration: parseInt(compensation, 10) ? parseInt(compensation, 10) : '',
        revenuNet: results.revenuNet,
      };
    } else {
      return {
        socialForm: 0,
        revenuNet: 0,
        CA: 0,
        charges: 0,
        cotisations: 0,
        IS: 0,
        IR: 0,
        flatTax: 0,
        dividende: 0,
      };
    }
  };

  const style = {
    simulationPage: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
      position: 'relative',
    },
    formDiv: {
      margin: 'auto',
      width: '90%',
      maxWidth: '1100px',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
    },
    divider: {
      border: 'none',
      width: '33%',
      borderBottom: '1.5px solid' + colors.blueGray,
      margin: ' 43px auto',
      borderRadius: '5px',
    },
    innerResultDiv: {
      display: 'flex',
      flexDirection: isLargerThan1000 ? 'row' : 'column-reverse',
      position: 'relative',
      width: '90%',
      margin: '0 auto',
      alignItems: isLargerThan1000 ? 'start' : 'center',
      justifyContent: 'center',
    },
    chartHalf: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: isLargerThan1000 && !isLargerThan1050 ? '2%' : 0,
    },
    chartSquare: {
      border: '1px solid' + colors.mBlue,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: colors.lOrange,
    },
    chartSquareSm: {
      width: '98%',
      height: '98%',
      backgroundColor: 'white',
      borderRadius: '50%',
    },
    chartCircle: {
      width: isLargerThan1050 ? '358px' : isLargerThan500 ? '320px' : '282px',
      height: isLargerThan1050 ? '358px' : isLargerThan500 ? '320px' : '282px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    chartContainer: {
      margin: 'auto',
      height: '100%',
      width: '200%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '-50%',
    },
    synthesisHalf: {
      width: isLargerThan1000 ? '49%' : '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isLargerThan1000 ? 'end' : 'center',
      justifyContent: 'flex-end',
    },
  };

  return (
    <div className="simulationPage" style={style.simulationPage}>
      <div className="formDiv" style={style.formDiv}>
        <Form setResults={setResults} colors={colors} setLoadingDoubleSASComp={setLoadingDoubleSASComp} setTabIndex={setTabIndex} tabIndex={tabIndex}/>
      </div>
      <div className="divider" style={style.divider}></div>
      <div className="innerResultDiv" style={style.innerResultDiv}>
        <div className="synthesisHalf" style={style.synthesisHalf}>
          <Synthese results={results} colors={colors} />
        </div>
        <div className="chartHalf" style={style.chartHalf}>
          <div style={style.chartSquare}>
            <div style={style.chartCircle}>
              <div style={style.chartSquareSm}>
                <div className="chartContainer" style={style.chartContainer}>
                  {loadingDoubleSASComp ? (
                    <Spinner color={colors.lOrangeOpac} size="xl" thickness="4px" speed="0.75s" />
                  ) : isLargerThan1050 ? (
                    <Chart results={chartResults()} coloris={colors} loadingDoubleSASComp={loadingDoubleSASComp} setResults={setResults} />
                  ) : isLargerThan500 ? (
                    <ChartSm results={chartResults()} coloris={colors} loadingDoubleSASComp={loadingDoubleSASComp} />
                  ) : (
                    <ChartXs results={chartResults()} coloris={colors} loadingDoubleSASComp={loadingDoubleSASComp} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <TJM CA={results.CA} />
          {fiscalCorp()}
        </div>
      </div>
      <ShareButtons router={router} />
    </div>
  );
};
