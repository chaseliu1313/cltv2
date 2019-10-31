import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import HomeGrid from '../homeGrid';
import Wave from 'react-wavify';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '95vh',
    backgroundImage: 'linear-gradient(-90deg, #1F3459, #4FA9A9)',
    marginTop: '-62px',
    position: 'relative'
  },
  svg: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: 'auto',
    zIndex: 1,
    padding: 0
  },
  homeGrid: {
    display: 'flex',
    width: '120%',
    height: '80%',
    marginTop: 45,
    marginLeft: 10
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.homeGrid}>
          <HomeGrid />
        </div>
        <Wave
          fill="#FFFFFF"
          paused={false}
          className={classes.svg}
          options={{ height: 25, amplitude: 50, speed: 0.15, points: 6 }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
