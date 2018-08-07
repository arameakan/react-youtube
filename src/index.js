import React, { Component } from "react";
import { render } from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyBY9FBwIotH1oTXllFTNvQ_RZ2WN3wZ1JQ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: "football" }, videos =>
      this.setState(() => ({ videos, selectedVideo: videos[0] }))
    );
  }

  handleSelectVideo = () => {
    this.setState(selectedVideo => ({ selectedVideo }));
  };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.handleSelectVideo}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
