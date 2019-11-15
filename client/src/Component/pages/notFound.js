import React from 'react';

import Backgoundimg from '../../img/404bg.png';
import FourOFour from '../../img/404.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${Backgoundimg})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    flexDirection: 'column'
  }
}));
export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={FourOFour}
        alt="404"
        height="auto"
        width="50%"
        style={{ margin: 'auto', display: 'block' }}
      />
      <Typography
        variant="body1"
        style={{
          color: 'white',
          fontSize: '3vw',
          margin: 'auto',
          display: 'block',
          marginTop: -60
        }}
      >
        Oops，can't find that page.
      </Typography>
    </div>
  );
}
