import React, { Component } from 'react';

class SearchBar extends Component {

  useUpdate = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      onChange={this.useUpdate}/>
    );
  }
}

export default SearchBar;
