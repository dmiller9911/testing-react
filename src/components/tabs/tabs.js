import React from 'react';
import { css } from 'aphrodite';
import { styles } from './tabs.styles';

const defaultProps = {
  value: 0
};

export const Tabs = ({ children, onChange, value }) => (
  <div className={css(styles.tabs)}>
    {React.Children.map(
      children,
      (child, i) =>
        React.isValidElement(child) &&
        React.cloneElement(child, {
          onClick: () => onChange(child.props.value || i),
          active: child.props.value ? child.props.value === value : i === value
        })
    )}
  </div>
);

Tabs.defaultProps = defaultProps;
