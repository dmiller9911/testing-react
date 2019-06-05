import React from 'react';
import { makeStyles } from '../../styles/makeStyles';
import TextField, { FilledTextFieldProps } from '@material-ui/core/TextField';
import { createTestIds, getTestProps } from '../../utils/e2eUtils';

export const testIds = createTestIds('ParkFilter', {
  input: 'input'
});

const useStyles = makeStyles(theme => ({
  contrastText: {
    color: `${theme.palette.common.white} !important`
  }
}));

interface ParkFilterProps
  extends Pick<FilledTextFieldProps, 'value' | 'onChange' | 'label'> {}

export const ParkFilter: React.FC<ParkFilterProps> = ({
  value,
  onChange,
  label
}) => {
  const classes = useStyles();
  return (
    <TextField
      fullWidth
      label={label}
      inputProps={getTestProps(testIds.input) as any}
      InputProps={{
        className: classes.contrastText
      }}
      InputLabelProps={{
        className: classes.contrastText
      }}
      variant="filled"
      value={value}
      onChange={onChange}
    />
  );
};
