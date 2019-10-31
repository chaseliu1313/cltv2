import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { theme } from '../../theme';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },

  paper: {
    display: 'block',
    width: '80%',
    minHeight: '100px',
    backgroundColor: '#ffffff',
    borderRadius: '5%',
    margin: 10,
    padding: 10,
    boxShadow: '2px 2px 6px #7A7474'
  },
  content: {
    fontSize: '3vh',
    [theme.breakpoints.down(600)]: { fontSize: '2vh' }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 10
  }
}));

export default function AboutGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6} sm={12} lg={6} className={classes.container}>
          <Paper className={classes.paper}>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · A former radio host, podcast producer, marketing coordinator in
              China. (2011-2015)
            </Typography>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · Studied Master of Information Technology program at RMIT
              university, Melbourne, Australia. (2016-2017)
            </Typography>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · Started a career as a web developer（2018）
            </Typography>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · Moved to Toronto, Canada. (2019)
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6} sm={12} lg={6} className={classes.container}>
          <Paper className={classes.paper}>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · Super passionate about coding and design.
            </Typography>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · Have deep understanding in marketing, project management and
              teamwork.
            </Typography>
            <Typography
              variant="body1"
              display="block"
              className={classes.content}
            >
              · A fanboy of JS, React, Node, Flutter, SQL, MongoDB, Go.
            </Typography>
            <ThemeProvider theme={theme}>
              <div className={classes.btnContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cTButton}
                  href="https://drive.google.com/file/d/19bY6bxV1um2cgcwi8B99pMTJ59fBvEed/view?usp=sharing"
                  download
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.cTbutton}
                  component={Link}
                  to="/contact"
                >
                  Send me a message
                </Button>
              </div>
            </ThemeProvider>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
