import React from 'react';
import { css } from 'aphrodite';
import { styles } from './tabs.styles';

export const Tab = ({ label, active, onClick, testId }) => (
  <div
    data-testid={testId || label}
    className={css(styles.tab, active && styles.tabActive)}
    onClick={onClick}
  >
    {label}
  </div>
);
