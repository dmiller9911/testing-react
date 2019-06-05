import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { createTestIds, getTestProps } from '../../utils/e2eUtils';

const size = 24;

interface FavoriteToggleProps {
  checked: boolean;
  onToggle(): void;
}

export const testIds = createTestIds('FavoriteToggle', {
  button: 'button'
});

export const FavoriteToggle: React.FC<FavoriteToggleProps> = ({
  checked,
  onToggle
}) => (
  <IconButton
    onClick={onToggle}
    color="primary"
    role="button"
    {...getTestProps(testIds.button)}
  >
    {checked ? <Star /> : <StarBorder />}
  </IconButton>
);
