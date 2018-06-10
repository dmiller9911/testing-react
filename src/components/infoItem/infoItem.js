import React from 'react';
import { styles } from './infoItem.styles';
import { css } from 'aphrodite';

export const InfoItem = ({ label, children }) => (
  <div className={css(styles.infoItem)}>
    <div className={css(styles.label)}>{label}</div>
    <div className={css(styles.value)}>{children}</div>
  </div>
);
