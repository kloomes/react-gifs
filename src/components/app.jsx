import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "LmNwrBhejkK9EFP504"
    };
  }

  search = (query) => {
    giphy({ apiKey: "f2COuNQdsd3V07FVRfd8pgM5LL3vKIia", https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState(
        { gifs: res.data }
      );
    });
  }

  gifSelect = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} gifSelect={this.gifSelect}/>
        </div>
      </div>
    );
  }
}

export default App;
