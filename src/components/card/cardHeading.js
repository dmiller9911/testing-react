import React from 'react';
import { css } from 'aphrodite';
import { styles } from './card.styles';

export const CardHeading = ({ children, action }) => (
  <div className={css(styles.cardHeading)}>
    <div className={css(styles.headingTitle)}> {children}</div>
    {Boolean(action) && <div>{action}</div>}
  </div>
);
