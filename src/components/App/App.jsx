import React from 'react';
import './App.css';
//import our component
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className="body">
        <p>
          Gallery goes here
          </p>
        </div>
        <GalleryList />
        <GalleryItem />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
