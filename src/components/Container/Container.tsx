import React from 'react';
import { makeStyles } from '../../styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 900,
    margin: '0 auto',
    padding: theme.spacing(4)
  }
}));

export const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
