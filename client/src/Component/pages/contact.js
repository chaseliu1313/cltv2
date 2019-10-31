import React, { useState } from 'react';
import { ThemeProvider, withStyles, makeStyles } from '@material-ui/styles';
import contactBg from '../../img/contactBg.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { theme } from '../../theme';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import SvgIcon from '@material-ui/core/SvgIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { inputValid } from '../../middleware/index';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${contactBg})`,
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  },
  container: {
    height: '70%',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    boxShadow: '2px 2px 6px #7A7474',
    borderRadius: '2%',
    ['@media (max-width:600px) ']: {
      height: '80%',
      width: '90%'
    },
    ['@media (max-height:450px) ']: {
      height: '150%',
      width: '95%'
    }
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 5
  },
  title: {
    fontSize: '6vw',
    color: '#223C5F',
    marginLeft: 10,
    ['@media (max-width:960px) ']: {
      marginLeft: 0
    }
  },
  form: {
    display: 'flex',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    padding: 15
  },
  margin: { margin: 5 },
  socialBtnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  input: {}
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#274967',
      borderWidth: 2
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important' // override inline-style
    }
  }
})(TextField);

export default function Contact() {
  const classes = useStyles(theme);

  const [input, setInput] = useState({
    name: 'name',
    email: 'xxx@xxx.com',
    message: 'Leave your message here :)'
  });

  const handleInput = value => event => {
    setInput({ ...input, [value]: event.target.value });
  };
  const handleSubmit = () => {
    console.log(inputValid(input));
  };

  const clearForm = () => {
    setInput({
      name: ' ',
      email: 'xxx@xxx.com',
      message: 'Leave your message here :)'
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Grid item md={6} xs={3} className={classes.left}>
          <Typography variant="h1" className={classes.title}>
            Drop me a message
          </Typography>
          <div className={classes.socialBtnGroup}>
            <Fab
              color="secondary"
              aria-label="gitHub"
              className={classes.margin}
            >
              <SvgIcon>
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </SvgIcon>
            </Fab>
            <Fab
              color="secondary"
              aria-label="LinkedIn"
              className={classes.margin}
            >
              <LinkedInIcon />
            </Fab>
          </div>
        </Grid>
        <Grid item md={6} xs={9}>
          <ThemeProvider theme={theme}>
            <FormControl className={classes.form}>
              <ValidationTextField
                className={classes.input}
                label="Name"
                required
                variant="outlined"
                value={input.name}
                onChange={handleInput('name')}
                id="validation-outlined-input"
              />
              <ValidationTextField
                className={classes.input}
                label="email"
                required
                variant="outlined"
                value={input.email}
                onChange={handleInput('email')}
                id="validation-outlined-input"
                type="email"
              />
              <ValidationTextField
                className={classes.input}
                label="message"
                required
                variant="outlined"
                value={input.message}
                onChange={handleInput('message')}
                placeholder="leave your message here :)"
                id="validation-outlined-input"
                multiline
                rows="5"
              />
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                onClick={handleSubmit}
              >
                <SendIcon />
                Extended
              </Fab>
            </FormControl>
          </ThemeProvider>
        </Grid>
      </Paper>
    </div>
  );
}
