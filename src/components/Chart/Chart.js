import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

import annotationPlugin from 'chartjs-plugin-annotation';

import React, { useEffect, /* useRef */ useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { convertCamel, format as formating } from '../../util/helper.js';

export function Chart({ results, coloris }) {
  const { socialForm, CA, charges, cotisations, IR, revenuNet } = results;

  const format = (nb) => {
    return formating(nb) + ' €';
  };

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, annotationPlugin);

  /*     const myChartRef = useRef(useRef < ChartJS < 'bar', [] >> null);
   */
  const colors = {
    remuneration: {
      bar: '#9AE6B4',
      label: 'green',
    },
    cotisations: {
      bar: '#FEEBC8',
      label: 'white',
    },
    IR: {
      bar: 'rgb(132, 227, 214)',
      label: 'rgb(70, 150, 180)',
    },
    revenuNet: {
      bar: 'rgb(176, 255, 211)',
      label: '#228B22',
    },
    charges: {
      bar: 'rgb(252, 188, 139)',
      label: 'brown',
    },
    flatTax: {
      bar: 'rgb(166, 255, 243)',
      label: '#1E90FF',
    },
    dividende: {
      bar: '#C6F6D5',
      label: '#14b09b',
    },
    IS: {
      bar: '#FFC0CB',
      label: '#CD5C5C',
    },
    border: '#7c5430',
  };

  const initialDataset = [
    {
      label: 'Charges : - €',
      data: [4000],
      backgroundColor: coloris.xxlBlueGray,
    },
    {
      label: 'Cotisations : - €',
      data: [15840],
      backgroundColor: coloris.xlBlueGray,
    },
    {
      label: 'Impôts : - €',
      data: [8177],
      backgroundColor: coloris.lBlueGray,
    },
    {
      label: 'Revenu net : - €',
      data: [43983],
      backgroundColor: coloris.blueGray,
    },
  ];

  const initialData = {
    labels: ['1', '2'],
    datasets: initialDataset.reverse(),
  };

  const initialOptions = {
    barPercentage: 0.25,
    scales: {
      x: {
        display: false,
        max: 0,
        stacked: true,
      },
      y: {
        display: false,
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      annotation: {
        annotations: null,
      },
    },
  };

  const [data, setData] = useState(initialData);
  const [options, setOptions] = useState(initialOptions);

  const loadData = () => {
    if (results.CA) {
      document.querySelector('canvas').style.padding = '.8%';
      const resultObj = Object.keys(results);
      const propertyArr = [];
      const notEmptyValuesArr = [];
      resultObj.slice(2).forEach((elt) => {
        propertyArr.push(elt);
        if (results[elt] && elt !== 'revenuNet') {
          notEmptyValuesArr.push(elt);
        }
      });

      setData(() => {
        const datasets = [];
        propertyArr.forEach((elt) => {
          if (elt !== 'revenuNet' || (results.socialForm !== 'SAS' && results[elt] > 0)) {
            datasets.unshift({
              label: convertCamel(elt),
              data: [results[elt]],
              backgroundColor: colors[elt].bar,
            });
          }
        });

        return {
          labels: ['1', '2'],
          datasets: datasets,
        };
      });

      setOptions(() => {
        const annotations = {};
        propertyArr.forEach((elt, i) => {
          const location =
            i === 0
              ? CA - results[elt] / 2
              : CA -
                (propertyArr
                  .slice(0, i)
                  .map((elt) => results[elt])
                  .reduce((a, b) => a + b) +
                  results[elt] / 2);

          const yAdjust = () => {
            const totalLabelSpan = socialForm === 'SAS' || revenuNet < 0 ? 280 : 280 * (1 - revenuNet / CA);
            const pixelsPerLabel = (totalLabelSpan / notEmptyValuesArr.length) * (1 + (0.1 * totalLabelSpan) / 280);
            const notEmptyArrayEltIndex = notEmptyValuesArr.findIndex((ele) => ele === elt);
            if (!results[elt]) {
              return;
            }
            if (notEmptyValuesArr.length < 3 && socialForm !== 'ME') {
              return -14;
            }
            if (notEmptyValuesArr.length === 1 && socialForm === 'ME') {
              return -14;
            }
            return -(
              totalLabelSpan *
              ((CA * (1 + 0.08 * (totalLabelSpan / 280)) - location) / CA -
                ((pixelsPerLabel * notEmptyArrayEltIndex) / totalLabelSpan) * (1 + 0.06 * (totalLabelSpan / 280)))
            );
          };

          annotations[elt] = {
            type: 'label',
            xValue: 0.05,
            xAdjust: 79,
            yValue: revenuNet < 0 ? location - revenuNet : location,
            yAdjust: yAdjust(),
            textAlign: 'start',
            position: 'start',
            display: results[elt],
            content: [convertCamel(elt) + ' ' + format(results[elt])],
            backgroundColor: colors[elt].bar,
            callout: {
              display: true,
              side: 10,
            },
            z: 2,
            font: {
              size: 14,
              family: 'Poppins',
              weight: 600,
            },
          };
        });

        const isExpenseLow = (CA - revenuNet) / CA < 0.3;

        annotations.revenuNet = {
          type: 'line',
          xMin: -0.15,
          xMax: 0.15,
          yMin: revenuNet < 0 ? 0 : revenuNet,
          yMax: revenuNet < 0 ? 0 : revenuNet,
          borderColor: 'black',
          borderDash: [3, 3],
          borderWidth: 2,
          display: true,
          label: {
            display: true,
            yAdjust: isExpenseLow ? 28 : -27,
            xAdjust: -118,
            backgroundColor: 'transparent',
            color: 'black',
            content: revenuNet > 0 ? ['Revenu net', format(revenuNet)] : '',
            font: {
              family: 'Fredoka',
              size: 17,
              lineHeight: 1.15,
              weight: 600,
            },
            padding: 0,
            textAlign: 'center',
          },
        };
        annotations.chiffreDaffaires = {
          type: 'line',
          yMin: CA,
          yMax: CA,
          xMin: -0.15,
          xMax: 0.15,
          borderColor: 'black',
          borderWidth: 2,
          borderDash: [3, 3],
          display: true,
          label: {
            xAdjust: -114,
            yAdjust: -27,
            display: true,
            content: ["Chiffre d'affaires ", format(CA)],
            backgroundColor: 'transparent',
            color: 'black',
            font: {
              family: 'Fredoka',
              size: 17,
              lineHeight: 1.15,
              weight: 600,
            },
            padding: 0,
            textAlign: 'center',
          },
        };
        return {
          hover: { mode: null },
          layout: {},
          barPercentage: 0.25,
          showAllTooltips: true,
          scales: {
            x: {
              stacked: true,
              display: false,
              max: 0,
            },
            y: {
              stacked: true,
              display: false,

              max: CA ? 1.18 * (revenuNet < 0 ? charges + cotisations + IR : CA) : 0,
              min: !CA ? 0 : revenuNet < 1 || revenuNet < 0.01 * CA ? -0.06 * Math.max(CA, cotisations) : -0.03 * Math.max(CA, cotisations + CA),
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
            annotation: {
              annotations: annotations,
            },
          },
        };
      });
    } else {
      document.querySelector('canvas').style.padding = '2%';
      setData(initialData);
      setOptions(initialOptions);
    }
  };

  useEffect(() => {
    loadData();
  }, [results]);

  return <Bar /* ref={myChartRef} */ datasetIdKey="barChart" options={options} data={data} />;
}
