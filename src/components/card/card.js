import React from 'react';
import { css } from 'aphrodite';
import { styles } from './card.styles';

export const Card = ({ children, ...props }) => (
  <div className={css(styles.card)} {...props}>
    {children}
  </div>
);
