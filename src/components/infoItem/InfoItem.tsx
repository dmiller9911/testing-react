import React from 'react';
import { makeStyles } from '../../styles/makeStyles';

const useStyles = makeStyles(theme => ({
  infoItem: {
    padding: theme.spacing(0, 2)
  },
  label: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    fontWeight: 600
  },
  value: {
    fontSize: '1.5rem'
  }
}));

interface InfoItemProps {
  label: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ label, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.infoItem}>
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>{children}</div>
    </div>
  );
};
