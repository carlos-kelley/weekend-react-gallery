import React from 'react';
import './App.css';
//import our component
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import Body from '../Body/Body';


function App() {

  let itemsArray = [
    {
        description: 'My cats',
        test: 'testy'
    }
]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <Body />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
