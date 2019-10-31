import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';

const img1 = {
  url: '../img/cardLeft.png',
  title: 'Sound Enginner',
  width: '300'
};
const img2 = {
  url: '../img/cardRight.png',
  title: 'Full-stack Developer',
  width: '300'
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down(400)]: {
      justifyContent: 'space-between'
    }
  },
  name: {
    fontSize: '120px',
    fontWeight: 'bold',
    textShadow: '1px 3px 6px #000000',
    color: '#FFFFFF',
    [theme.breakpoints.down(960)]: { fontSize: '80px' },
    [theme.breakpoints.down(600)]: {
      fontSize: '60px'
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '30px'
    }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  image: {
    display: 'block',
    height: 230,
    width: 230,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '25%',
    marginTop: 20,
    [theme.breakpoints.down(960)]: {
      height: 150,
      width: 150,
      margin: 'auto',
      marginTop: 14
    },
    [theme.breakpoints.down(600)]: {
      height: 150,
      width: 150,
      marginLeft: 20,
      marginTop: 14
    },
    [theme.breakpoints.down(400)]: {
      height: 40,
      width: 40,
      marginLeft: 80,
      backgroundColor: 'transparent !important'
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {},
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
    color: '#223C5F',
    [theme.breakpoints.down(400)]: {
      color: 'white'
    }
  }
}));

export default function HomePanel() {
  const classes = useStyles();
  const [mounted, toggleMount] = useState(false);

  useEffect(() => {
    toggleMount(true);
  }, []);

  return (
    <div className={classes.root}>
      <Grow in={mounted}>
        <Typography variant="h1" className={classes.name}>
          Hi, I am Chase Liu
        </Typography>
      </Grow>
      <Grid container>
        <Grid item md={6} sm={6} lg={6} xs={6} className={classes.btnContainer}>
          <ButtonBase
            focusRipple
            className={classes.image}
            style={{ backgroundColor: 'rgba(194, 217, 148, .9)' }}
          >
            <span className={classes.imgSrc}>
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {img1.title}
                </Typography>
              </span>
            </span>
          </ButtonBase>
        </Grid>
        <Grid item md={6} sm={6} lg={6} xs={6}>
          <ButtonBase
            focusRipple
            className={classes.image}
            style={{ backgroundColor: 'rgba(253, 245, 23, 0.8)' }}
          >
            <span className={classes.imgSrc}>
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {img2.title}
                </Typography>
              </span>
            </span>
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}
