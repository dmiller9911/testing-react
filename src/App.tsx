import React, { useEffect } from 'react';
import { getParks, Park } from './api/parks';
import { ParkList } from './components/ParkList';
import { Container } from './components/Container';
import { Header } from './components/Header';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from './styles/makeStyles';
import { ParkFilter } from './components/ParkFilter';
import { createTestIds, getTestProps } from './utils/e2eUtils';

export const testIds = createTestIds('App', {
  showFavoritesOnlyToggle: 'showFavoritesOnlyToggle'
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'grid',
    gridTemplateRows: 'max-content 1fr'
  },
  main: {
    overflowY: 'auto',
    backgroundColor: theme.palette.background.default,
    marginTop: -25,
    borderRadius: 25
  },
  filters: {
    display: 'grid',
    gridTemplateColumns: '1fr max-content',
    gridColumnGap: 50
  }
}));

export const App: React.FC = () => {
  const classes = useStyles();
  const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false);
  const [parkNameFilter, setParkNameFilter] = React.useState('');
  const [parks, setParks] = React.useState<Park[]>([]);
  const [favoriteParks, setFavoriteParks] = React.useState<Set<string>>(
    new Set()
  );

  const handleParkFavoriteToggle = React.useCallback((park: any) => {
    setFavoriteParks(currentValue => {
      const newValue = new Set(currentValue);
      if (newValue.has(park.id)) {
        newValue.delete(park.id);
      } else {
        newValue.add(park.id);
      }
      return newValue;
    });
  }, []);

  const handleParkNameFilterChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setParkNameFilter(e.target.value);
    },
    []
  );

  useEffect(() => {
    getParks().then(parks => {
      setParks(parks);
    });
  }, []);

  const filteredParks = React.useMemo(() => {
    if (showFavoritesOnly || parkNameFilter) {
      return parks.filter(p => {
        const isFavorite = !showFavoritesOnly || favoriteParks.has(p.id);
        return parkNameFilter
          ? new RegExp(parkNameFilter, 'gi').test(p.name) && isFavorite
          : isFavorite;
      });
    }
    return parks;
  }, [showFavoritesOnly, favoriteParks, parkNameFilter, parks]);

  return (
    <div className={classes.root}>
      <Header>
        <div className={classes.filters}>
          <ParkFilter
            label="Filter Parks by Name"
            value={parkNameFilter}
            onChange={handleParkNameFilterChange}
          />
          <FormControlLabel
            label="Favorites"
            style={{ color: '#fff' }}
            control={
              <Switch
                value="favoritesOnly"
                checked={showFavoritesOnly}
                inputProps={
                  getTestProps(testIds.showFavoritesOnlyToggle) as any
                }
                onChange={() => setShowFavoritesOnly(!showFavoritesOnly)}
              />
            }
          />
        </div>
      </Header>

      <main className={classes.main}>
        <Container>
          <ParkList
            parks={filteredParks}
            favoriteParks={favoriteParks}
            onToggleFavorite={handleParkFavoriteToggle}
          />
        </Container>
      </main>
    </div>
  );
};
