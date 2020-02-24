import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeGrid from '../homeGrid';
import Wave from 'react-wavify';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',

    backgroundImage: 'linear-gradient(-90deg, #1F3459, #4FA9A9)'
  },
  svg: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 'auto',
    zIndex: 1,
    padding: 0,
    marginBottom: -10
  },
  homeGrid: {
    display: 'flex',
    width: '120%',
    height: '80%',
    marginTop: 45,
    marginLeft: 10
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <HomeGrid />

        <Wave
          fill="#FFFFFF"
          paused={false}
          className={classes.svg}
          options={{ height: 25, amplitude: 50, speed: 0.15, points: 6 }}
        />
      </div>
      <p className="copyright">
        designed & made by Chase Liu, all rights reserved©2019. Toronto Canada
      </p>
    </Fragment>
  );
}
