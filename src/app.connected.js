import React from 'react';
import { getParks } from './api/parks';
import { Tab, Tabs } from './components/tabs';
import { ParkList } from './components/parkList';
import { styles } from './app.styles';
import { css } from 'aphrodite';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parksSelectors, parksActions } from './redux/parks';

const tabs = {
  allParks: 0,
  favorites: 1
};

class App extends React.Component {
  componentDidMount() {
    this.props.getAllParks();
  }

  render() {
    const {
      parksFilter,
      setParkFilter,
      parks,
      favoriteParks,
      toggleFavorite
    } = this.props;

    return (
      <div className={css(styles.app)}>
        <Tabs onChange={setParkFilter} value={parksFilter}>
          <Tab label="All Parks" value={parksActions.parkFilters.all} />
          <Tab label="Favorites" value={parksActions.parkFilters.favorites} />
        </Tabs>

        <ParkList
          parks={parks}
          favoriteParks={favoriteParks}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    parksFilter: parksSelectors.selectParkFilter(state),
    parks: parksSelectors.selectFilteredParks(state),
    favoriteParks: parksSelectors.selectFavorites(state),
    isLoadingParks: parksSelectors.selectParksLoading(state)
  };
}

export default connect(
  mapStateToProps,
  {
    getAllParks: parksActions.getAllParks,
    setParkFilter: parksActions.setParkFilter,
    toggleFavorite: parksActions.toggleFavorite
  }
)(App);
