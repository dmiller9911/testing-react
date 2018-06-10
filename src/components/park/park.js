import React from 'react';
import { Card, CardHeading, CardBody } from '../card';
import { FavoriteToggle } from '../favoriteToggle';
import { InfoItem } from '../infoItem';
import { styles } from './park.styles';
import { css } from 'aphrodite';

export class Park extends React.Component {
  handleToggleFavorite = () => {
    this.props.onToggleFavorite(this.props.park);
  };

  render() {
    const { isFavorite, park } = this.props;

    return (
      <Card data-testid="park">
        <CardHeading
          action={
            Boolean(this.props.onToggleFavorite) && (
              <FavoriteToggle
                checked={isFavorite}
                onToggle={this.handleToggleFavorite}
              />
            )
          }
        >
          {park.name}
        </CardHeading>
        <CardBody>
          <div className={css(styles.info)}>
            <InfoItem label="Location">{park.location}</InfoItem>
            <InfoItem label="Min Elevation">
              {formatNumber(park.minElevation)} ft.
            </InfoItem>
            <InfoItem label="Max Elevation">
              {formatNumber(park.maxElevation)} ft.
            </InfoItem>
            <InfoItem label="Size">{formatNumber(park.size)} ac.</InfoItem>
          </div>
        </CardBody>
      </Card>
    );
  }
}

function formatNumber(num = 0) {
  return num.toLocaleString('en');
}
