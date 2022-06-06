import React from 'react';
import {useState} from 'react';
import GalleryList from '../GalleryList/GalleryList';


function Body(){
    return(
        <div className="body">
        <p>
          Gallery goes here
          <GalleryList />
          </p>
        </div>
    );
}

export default Body;

