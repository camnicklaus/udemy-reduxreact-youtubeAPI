import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// console.log(process.env.YOUTUBE_API_KEY)
// envVars()


const API_KEY = process.env.YOUTUBE_API_KEY;
// create a new component. produces html



class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null  
    };
    this.videoSearch('surfboards'); 
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
         })//es6 syntax
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)

    return (
      <div>
        <SearchBar 
          onSearchTermChange={videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  } 
};

// hey react render this component in the DOM!
ReactDOM.render(<App />, document.querySelector('.container'));