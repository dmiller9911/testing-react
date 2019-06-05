import React from 'react';
import { Container } from '../Container';
import { makeStyles } from '../../styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    minHeight: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: theme.spacing(4, 0)
  }
}));

export const Header: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <header role="banner" className={classes.root}>
      <Container>{children}</Container>
    </header>
  );
};
