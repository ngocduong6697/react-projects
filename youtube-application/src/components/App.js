import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hook/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('ielts');

    useEffect(()=> {
        setSelectedVideo(videos[0]);
    }, [videos]);

    const onVideoSelect = video => {
        this.setState({selectedVideo : video})
    };
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={onVideoSelect}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;