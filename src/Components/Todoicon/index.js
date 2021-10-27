import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';

import './Todoicon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),

};

function Todoicon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { Todoicon };
