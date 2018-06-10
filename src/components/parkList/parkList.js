import React from 'react';
import { styles } from './parkList.styles';
import { css } from 'aphrodite';
import { Park } from '../park';

export const ParkList = ({ parks, onToggleFavorite, favoriteParks }) => (
  <ul className={css(styles.parkList)}>
    {parks.map(park => (
      <li className={css(styles.listItem)} key={park.id}>
        <Park
          park={park}
          isFavorite={favoriteParks.has(park.id)}
          onToggleFavorite={onToggleFavorite}
        />
      </li>
    ))}
  </ul>
);
