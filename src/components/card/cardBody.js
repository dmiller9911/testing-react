import React from 'react';
import { css } from 'aphrodite';
import { styles } from './card.styles';

export const CardBody = ({ children }) => (
  <div className={css(styles.cardBody)}>{children}</div>
);
