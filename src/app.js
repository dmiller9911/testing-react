import React from 'react';
import { getParks } from './api/parks';
import { Tab, Tabs } from './components/tabs';
import { ParkList } from './components/parkList';
import { styles } from './app.styles';
import { css } from 'aphrodite';

const tabs = {
  allParks: 0,
  favorites: 1
};

class App extends React.Component {
  state = {
    filterValue: '',
    activeTab: tabs.allParks,
    parks: [],
    favoriteParks: new Set()
  };

  componentDidMount() {
    getParks().then(parks => {
      this.setState(() => ({ parks }));
    });
  }

  handleInputChange = e => {
    const filterValue = e.currentTarget.value;
    this.setState(() => ({ filterValue }));
  };

  handleParkFavoriteToggle = park => {
    this.setState(state => {
      const favoriteParks = new Set(state.favoriteParks);
      if (favoriteParks.has(park.id)) {
        favoriteParks.delete(park.id);
      } else {
        favoriteParks.add(park.id);
      }
      return { favoriteParks };
    });
  };

  handleTabChange = activeTab => this.setState({ activeTab });

  render() {
    const { activeTab, parks, favoriteParks } = this.state;

    const filteredParks =
      activeTab === tabs.allParks
        ? parks
        : parks.filter(p => favoriteParks.has(p.id));

    return (
      <div className={css(styles.app)}>
        <Tabs onChange={this.handleTabChange} value={this.state.activeTab}>
          <Tab label="All Parks" value={tabs.allParks} />
          <Tab label="Favorites" value={tabs.favorites} />
        </Tabs>

        <ParkList
          parks={filteredParks}
          favoriteParks={favoriteParks}
          onToggleFavorite={this.handleParkFavoriteToggle}
        />
      </div>
    );
  }
}

export default App;
