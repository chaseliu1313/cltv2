import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { theme } from '../../theme';
import Background3 from '../../img/background3.svg';
import Typography from '@material-ui/core/Typography';
import AboutGrid from './aboutGrid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',

    backgroundImage: `url(${Background3})`,
    backgroundSize: ' cover',
    marginTop: '-62px',
    alignItems: 'center',

    [theme.breakpoints.down(960)]: {
      backgroundImage: 'linear-gradient(-90deg, #1F3459, #4FA9A9)'
    },
    [theme.breakpoints.down(600)]: {},
    [theme.breakpoints.down(400)]: {}
  },
  title: {
    fontSize: '60px',
    fontWeight: 'bold',
    textShadow: '1px 3px 6px #000000',
    color: '#FFFFFF',
    padding: '15px',
    [theme.breakpoints.down(600)]: {
      fontSize: '30px'
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '20px'
    }
  },
  leftPanel: {
    display: 'flex',
    alignItems: 'center'
  },
  rightPanel: {}
}));

export default function About() {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Grid container spaceing={3} style={{}}>
        <Grid item xs={12} md={3} lg={3} className={classes.leftPanel}>
          <Typography variant="h3" className={classes.title}>
            a little more about me...
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} lg={9} className={classes.rightPanel}>
          <AboutGrid />
        </Grid>
      </Grid>
    </div>
  );
}
