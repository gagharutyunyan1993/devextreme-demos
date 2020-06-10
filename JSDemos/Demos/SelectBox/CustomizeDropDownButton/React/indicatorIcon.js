import React from 'react';
import { LoadIndicator } from 'devextreme-react';

export default function IndicatorIcon({ isLoaded }) {
  return (
    <span>
      <LoadIndicator visible={!isLoaded} />
      <span hidden={!isLoaded}>
        <img
          src='../../../../images/icons/custom-dropbutton-icon.svg'
          className='custom-icon'
        />
      </span>
    </span>
  );
}
