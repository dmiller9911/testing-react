import React from 'react';
import { Park } from '../Park';
import { Park as APIPark } from '../../api/parks';
import { makeStyles } from '../../styles/makeStyles';

const useStyles = makeStyles(theme => ({
  parkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  listItem: {
    padding: 0,
    marginBottom: theme.spacing(1)
  }
}));

interface ParkListProps {
  parks: APIPark[];
  onToggleFavorite(park: any): void;
  favoriteParks: Set<string>;
}

export const ParkList: React.FC<ParkListProps> = ({
  parks,
  onToggleFavorite,
  favoriteParks
}) => {
  const classes = useStyles();

  return (
    <ul className={classes.parkList}>
      {parks.map(park => (
        <li className={classes.listItem} key={park.id}>
          <Park
            park={park}
            isFavorite={favoriteParks.has(park.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
};
