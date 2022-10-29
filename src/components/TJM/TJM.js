import { useState } from 'react';
import { format } from '../../util/helper';

export const TJM = ({ CA }) => {
  const [nbOfWeeks, setNbOfWeeks] = useState(43);
  return (
    <section
      className="TJMDiv"
      style={{ margin: '30px 0', width: '390px', fontFamily: 'Nunito Sans' }}
    >
      <p
        style={{
          fontSize: '1.3rem',
          fontWeight: 'bolder',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        Tarif Journalier Moyen (TJM)<nobr> :{' '}
        {nbOfWeeks > 0 && CA ? format(CA / (5 * nbOfWeeks)) : '-'} €</nobr>
      </p>

      <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        Sur une base de{' '}
        <input
          type="number"
          max={52}
          value={nbOfWeeks > 0 ? nbOfWeeks.toString() : ''}
          onChange={e => {
            setNbOfWeeks(Math.min(Number(e.target.value), 52));
          }}
          style={{ width: '40px', border: '1px solid', textAlign: 'center' }}
        />{' '}
        semaines travaillées annuellement.
      </p>
    </section>
  );
};
