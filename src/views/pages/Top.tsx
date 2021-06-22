import React, { ReactComponentElement } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import '../../style/Top.css';
import Header from 'views/components/modules/Header';
import Fotter from 'views/components/modules/Fotter';

const Top = () => {
  return (
    <Link className='Top-link' to='/portfolio'>
      <div className="Top">
        <div className="Top-header">
          <h1>
            Welcome to my portfolio!!
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Top;