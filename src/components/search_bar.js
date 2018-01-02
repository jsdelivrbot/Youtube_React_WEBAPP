import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render(){
    return (
      <div className="search-bar">
        <h1 className="main-header">&lt;Ari&gt;<span className="main-header-black">Tube</span></h1>
        <input
          className="search-bar-input"
          placeholder="Search..." 
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}