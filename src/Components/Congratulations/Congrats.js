import React from 'react';
import Tachyons from './../../../node_modules/tachyons/css/tachyons.min.css';
import './Congrats.css'

const Congrats = ({ onRouteChange }) => {
  return(
    <div className="center">
      <h1 className="center f2 f1-l fw2 black-90 mb0 lh-title center">Congratulations!</h1>
      <input
        onClick={() => onRouteChange('login')}
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
        value="Go Back"/>
    </div>
  );
}

export default Congrats;
