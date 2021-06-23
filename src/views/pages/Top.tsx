import React, { ReactComponentElement } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import useStyles from 'style/style';

const Top = () => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to='/portfolio'>
      <div className={classes.offset} />
        <div className={classes.top}>
          <h1>
            Welcome to my portfolio!!
          </h1>
        </div>
    </Link>
  );
}

export default Top;