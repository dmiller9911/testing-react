import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { FavoriteToggle } from '../FavoriteToggle';
import { InfoItem } from '../InfoItem';
import { createTestIds, getTestProps } from '../../utils/e2eUtils';
import { makeStyles } from '../../styles/makeStyles';
import { Park as APIPark } from '../../api/parks';

interface ParkProps {
  park: APIPark;
  onToggleFavorite(park: any): void;
  isFavorite: boolean;
}

export const testIds = createTestIds('Park', {
  root: 'root',
  name: 'name'
});

function formatNumber(num = 0) {
  return num.toLocaleString('en');
}

const useStyles = makeStyles({
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
  }
});

export const Park: React.FC<ParkProps> = ({
  isFavorite,
  park,
  onToggleFavorite
}) => {
  const classes = useStyles();

  return (
    <Card {...getTestProps(testIds.root)}>
      <CardHeader
        title={park.name}
        titleTypographyProps={getTestProps(testIds.name) as any}
        action={
          !!onToggleFavorite && (
            <FavoriteToggle
              checked={isFavorite}
              onToggle={() => onToggleFavorite(park)}
            />
          )
        }
      />
      <CardContent>
        <div className={classes.info}>
          <InfoItem label="Location">{park.location}</InfoItem>
          <InfoItem label="Min Elevation">
            {formatNumber(park.minElevation)} ft.
          </InfoItem>
          <InfoItem label="Max Elevation">
            {formatNumber(park.maxElevation)} ft.
          </InfoItem>
          <InfoItem label="Size">{formatNumber(park.size)} ac.</InfoItem>
        </div>
      </CardContent>
    </Card>
  );
};
