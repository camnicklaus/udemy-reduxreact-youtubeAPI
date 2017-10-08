import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }
//syntactic sugar (adding { Component } )

class SearchBar extends Component {
  //setup this components state:
  //call constructor with props
  //call super with props so your component inheirits the parent props?
  //set up a new custom property on this.state ( { term: '' } )
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

//   onInputChange(event) {
//     console.log(event.target.value) 
//   }
}

export default SearchBar;