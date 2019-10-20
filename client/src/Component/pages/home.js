import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import HomeGrid from '../homeGrid';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '90vh',
    backgroundImage: 'linear-gradient(-90deg, #1F3459, #4FA9A9)',
    marginTop: '-62px',
    position: 'relative'
  },
  svg: {
    position: 'absolute',
    bottom: 0,
    width: '110%',
    height: 'auto',
    margin: '-5px',
    padding: 0,
    '& path': {
      fill: '#fff',
      width: '100%'
    }
  },
  homeGrid: {
    display: 'flex',
    width: '100%',
    height: '80%'
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <svg
          className={classes.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="2261.902"
          height="237.781"
          viewBox="0 0 2261.902 237.781"
        >
          <path
            d="M0,225.051C213.628,192.2,278.161,297.33,278.161,297.33S311.541,82.683,465.085,157.152,647.559,297.33,647.559,297.33s68.984-164.27,200.276-94.182,151.32,94.182,151.32,94.182,77.885-284.736,262.584-175.222S1544.35,297.33,1544.35,297.33s221.878-166.594,403.126-230.242c101.85-35.766,263.826,74.613,276.77,90.064,29.436,35.139,25.513,35.671,31.284,55.489,5.751,19.746,16.648,72.932-16.948,77.761-69.643,10.011-259.188,6.928-259.188,6.928H0Z"
            transform="translate(0 -59.997)"
          />
        </svg>

        <div className={classes.homeGrid}>
          <HomeGrid />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
