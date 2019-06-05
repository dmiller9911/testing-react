import muiMakeStyles from '@material-ui/styles/makeStyles';
import { Styles, WithStylesOptions } from '@material-ui/styles/withStyles';
import { Theme } from './theme';

export const makeStyles = <Props extends {}, ClassKey extends string = string>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: WithStylesOptions<Theme>
) => {
  return muiMakeStyles(styles, options);
};
