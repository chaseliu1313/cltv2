import React from 'react';
import './App.css';
import Menu from './Component/menuBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const documentWidth = document.documentElement.clientWidth;
const windowWidth = window.innerWidth;
const scrollBarWidth = windowWidth - documentWidth;

const useStyles = makeStyles(theme => ({
  App: {
    width: '100%',
    [theme.breakpoints.up(960)]: {
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      paddingRight: `${scrollBarWidth}`
    },
    [theme.breakpoints.down(600)]: {},
    [theme.breakpoints.down(400)]: {}
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
