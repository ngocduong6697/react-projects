import React from 'react';
import unsplash from '../API/unplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { images: [] };

    onSearchSubmit = async (term, per_page = 30) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term, per_page },
        });
        console.log(response);
        this.setState({images: response.data.results})
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
            <ImageList images={this.state.images}/>
            <ImageList images={this.state.images}/>
            <ImageList images={this.state.images}/>
            <ImageList images={this.state.images}/>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}

export default App;