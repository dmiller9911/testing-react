import React from 'react';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@material-ui/styles';
import { mount, MountRendererProps } from 'enzyme';

export const mountWithTheme: typeof mount = (
  node: React.ReactElement<any>,
  options?: MountRendererProps
) => {
  return mount(<ThemeProvider theme={theme}>{node}</ThemeProvider>, options);
};
