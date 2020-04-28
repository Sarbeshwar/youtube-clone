import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
import Comments from './components/comments';
import Like from './components/like';
const API_KEY = 'AIzaSyCZ9gretN1gHv15wssTQyOktP09eeANuP8';

class App extends Component {
  constructor(props){  
    super(props);

    this.state = {              // made an empty array and a property selectedVideo which is originally set to null
        videos: [],
        selectedVideo: null
    };

    this.videoSearch('Coronavirus');  //query which initially search for Upgrad 
}

videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    // function to get data from the api and assign it to the array and selectedvideo property.
      this.setState({ 
          videos: data,
          selectedVideo: data[0]   
      });
  });

}
userSelected(selected){// callback method to change videoplayer video on click of video on video list
  this.setState({selectedVideo: selected});
  var A=document.getElementById('btn-like');
            A.style.backgroundColor="white";
            document.getElementById('list-to-be-added').innerHTML="";
}
  render() {
    return ( //placement of components and passing props
      <div> 
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={this.userSelected.bind(this)} 
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
