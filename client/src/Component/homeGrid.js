import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomePanel from './homePanel';
import { theme } from '../theme';
import Avatar from '@material-ui/core/Avatar';
import Slide from '@material-ui/core/Slide';
import Glow from '../img/glow.svg';

const cxTheme = theme;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down(960)]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  avatar: {
    height: 240,
    width: 240,
    verticalAlign: 'middle',
    [theme.breakpoints.down(960)]: {
      height: 180,
      width: 180,
      margin: 'auto'
    },
    [theme.breakpoints.down(600)]: {
      height: 120,
      width: 120,
      margin: 'auto'
    },
    [theme.breakpoints.down(400)]: {
      height: 70,
      width: 70,
      margin: 'auto'
    }
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up(960)]: {
      backgroundImage: `url(${Glow})`,
      justifyContent: 'flex-end',
      backgroundSize: ' cover'
    }
  },
  left: { display: 'flex' }
}));

export default function HomeGrid(props) {
  const classes = useStyles(cxTheme);
  const [mounted, toggleMount] = useState(false);

  useEffect(() => {
    toggleMount(true);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spaceing={3} style={{ height: '70%' }}>
        <Grid item className={classes.left} xs={12} md={9} lg={9}>
          <HomePanel />
        </Grid>
        <Grid item className={classes.right} xs={12} md={3} lg={3}>
          <Slide direction="left" in={mounted} mountOnEnter unmountOnExit>
            <Avatar
              alt="Profile Pics"
              src="../img/home_photo1.png"
              className={classes.avatar}
            />
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}
