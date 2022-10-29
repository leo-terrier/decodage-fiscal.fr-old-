import { Chart } from '../Chart/Chart.js';

import { useState } from 'react';
import { GrDrag } from 'react-icons/gr';
import './style.css';

export const Results = ({ results }) => {
  const [isOpen, setIsOpen] = useState('closed');

  const style = {
    innerBoxChart: {
      margin: '0 auto',
      height: '60%',
      display: 'flex',
      alignItems: 'center',
    },
    innerBox: {
      margin: '30px auto',
      height: '40%',
      display: 'flex',
      justifyContent: 'center',
      width: '80%',
      alignItems: 'end',
      overflow: 'visible',
    },
    icon: {
      position: 'absolute',
      top: '50%',

      fontSize: '40px',
    },
    title: {
      fontFamily: 'Rancho',
      fontSize: '42px',
      margin: 0,
      marginTop: '20px',
      backgroundColor: 'transparent',
      textAlign: 'center',
      color: 'black',
    },
  };
  return (
    <div className={'container ' + isOpen}>
      <GrDrag
        draggable="true"
        style={style.icon}
        onMouseDown={() => {
          console.log('open');
          setIsOpen(prev => (prev === 'open' ? 'closed' : 'open'));
        }}
      />
      <h2 style={style.title}>Résultat</h2>
      <div style={style.innerBoxChart}>
        {/*         <div style={{ height: '90%' }}>
         */}{' '}
        <Chart results={results} />
        {/*         </div>
         */}{' '}
      </div>
      <div style={{ ...style.innerBox, backgroundColor: 'white' }}>
        <h1>I'm a table</h1>
      </div>
    </div>
  );
};
