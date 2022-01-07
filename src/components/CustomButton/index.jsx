import React from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@mui/material';
import useStyles from './styles';

function CustomButton(props) {
  const classes = useStyles();

  const {
    handleClick,
    icon,
    label,
    startIcon,
    endIcon,
    active,
    color,
    variant,
    isLoading,
    disabled,
    ...rest
  } = props;

  return (
    <Button
      classes={{
        root: `${classes.button} custom-button`,
        startIcon: classes.startButtonIcon,
        endIcon: classes.endButtonIcon,
      }}
      startIcon={
        isLoading ? (
          <CircularProgress size={18} className={classes.isLoading} />
        ) : (
          startIcon
        )
      }
      disabled={isLoading || disabled}
      endIcon={endIcon}
      variant={variant}
      aria-label="custom-button"
      onClick={handleClick}
      color={color}
      {...rest}
    >
      {label}
    </Button>
  );
}

CustomButton.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  active: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  variant: PropTypes.string,
};

CustomButton.defaultProps = {
  active: false,
  startIcon: null,
  endIcon: null,
  handleClick: () => {},
  variant: 'contained',
  color: 'primary',
};

export default CustomButton;
