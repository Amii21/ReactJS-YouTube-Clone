import React, { Component } from 'react';
import youtubeapi from './api/youtubeapi';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

export class App extends Component {

  state = {
    videos: [],
    selectedVideo: ''
  };

  componentDidMount(){
    this.onTermSubmit("React JS");
  }

  onSelectVideo = (video) => {
    this.setState({selectedVideo: video})
  }

  onTermSubmit =  async (term) => {
    const res = await youtubeapi.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({videos: res.data.items, selectedVideo: res.data.items[0]})
  }

  render() {
    return (
      <>
      <div className='container'>
        <div className='row yt'>
          <h1 className='text-center col-md-12'><i class="fab fa-youtube"></i>
          &nbsp; Video Search Engine</h1>
        </div>
        <div className='row my-2'>
          <div className='col-md-8'>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className='col-md-4'>
           <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
          </div>
        </div>

      </div>
      </>
    )
  }
}

export default App

