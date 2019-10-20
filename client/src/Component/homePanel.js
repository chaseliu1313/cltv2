import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const btnImg = [
  { url: '../img/card_left.png', title: 'Sound Enginner', width: '300' },
  { url: '../img/card_right.png', title: 'Full-stack Developer', width: '300' }
];

const img1 = {
  url: '../img/card_left.png',
  title: 'Sound Enginner',
  width: '300'
};
const img2 = {
  url: '../img/card_right.png',
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
  btnContainer: {},
  image: {
    display: 'block',
    height: 300,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',

    '&:hover, &$focusVisible': {
      zIndex: 1,

      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    },
    [theme.breakpoints.down(960)]: {
      height: 150,
      width: 150,
      margin: 'auto'
    },
    [theme.breakpoints.down(600)]: {
      height: 150,
      width: 150,
      marginLeft: 20
    },
    [theme.breakpoints.down(400)]: {
      height: 40,
      width: 40,
      marginLeft: 80
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
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  }
}));

export default function HomePanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.name}>
        Hi, I am Chase Liu
      </Typography>
      <Grid container>
        <Grid item md={6} sm={6} lg={6} xs={6} className={classes.btnContainer}>
          <ButtonBase focusRipple className={classes.image}>
            <span
              className={classes.imgSrc}
              style={{ backgroundImage: `url(${img1.url})` }}
            >
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
          <ButtonBase focusRipple className={classes.image}>
            <span
              className={classes.imgSrc}
              style={{ backgroundImage: `url(${img2.url})` }}
            >
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
