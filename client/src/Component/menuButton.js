import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const MenuButtons = props => {
  return (
    <Button
      disableRipple={true}
      fullWidth={true}
      style={{ backgroundColor: 'transparent' }}
      color="secondary"
      to={props.path}
      component={Link}
      variant={props.path === props.pathname ? 'outlined' : 'text'}
    >
      {props.name}
    </Button>
  );
};

export default MenuButtons;
