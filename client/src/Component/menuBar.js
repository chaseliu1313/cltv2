import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { theme } from '../theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import logo from '../img/Chase_logo_blue_green.png';
import { Route, Switch, withRouter } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Home from './pages/home';
import { compose } from 'recompose';
import MenuButton from './menuButton';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },

  logo: {
    position: 'relative',
    flexGrow: 1,
    padding: '0px',
    marginBottom: '-30px',
    maxWidth: '100px'
  },
  buttonGroup: {
    flexGrow: 2,
    display: 'flex',
    justifyContent: 'space-evenly'
  },

  toolbarMargin: theme.mixins.toolbar
});

class Menu extends Component {
  render() {
    const {
      classes,
      location: { pathname }
    } = this.props;

    const buttons = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ];

    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <AppBar position="sticky" color="inherit">
            <Toolbar className={classes.container}>
              <div className={classes.logo}>
                <img src={logo} alt="logo" style={{ maxWidth: '100px' }} />
              </div>

              <div className={classes.buttonGroup}>
                {buttons.map(button => {
                  if (button.path === '/') {
                    return (
                      <MenuButton
                        name={button.name}
                        path={button.path}
                        pathname={null}
                        key={button.name}
                      />
                    );
                  } else {
                    return (
                      <MenuButton
                        name={button.name}
                        path={button.path}
                        pathname={pathname}
                        key={button.name}
                      />
                    );
                  }
                })}
              </div>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <div className={classes.toolbarMargin}></div>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/blog" render={() => <Blog />} />
        </Switch>
      </Fragment>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(Menu);

/*
 <Button
                  disableRipple={true}
                  fullWidth={true}
                  style={{ backgroundColor: 'transparent' }}
                  color="secondary"
                  to="/"
                  component={Link}
                  //variant={'/' === pathname ? 'outlined' : 'text'}
                >
                  Home
                </Button>

                <Button
                  disableRipple={true}
                  fullWidth={true}
                  style={{ backgroundColor: 'transparent' }}
                  color="secondary"
                  to="/about"
                  component={Link}
                  variant={'/about' === pathname ? 'outlined' : 'text'}
                >
                  About
                </Button>

                <Button
                  disableRipple={true}
                  fullWidth={true}
                  style={{ backgroundColor: 'transparent' }}
                  color="secondary"
                  to="/blog"
                  component={Link}
                  variant={'/blog' === pathname ? 'outlined' : 'text'}
                >
                  Blog
                </Button>

                <Button
                  disableRipple={true}
                  fullWidth={true}
                  style={{ backgroundColor: 'transparent' }}
                  color="secondary"
                  to="/contact"
                  component={Link}
                  variant={'/contact' === pathname ? 'outlined' : 'text'}
                >
                  Contact
                </Button>*/
