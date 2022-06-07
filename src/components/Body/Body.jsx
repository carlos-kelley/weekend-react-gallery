import React from 'react';
import {useState} from 'react';
import GalleryList from '../GalleryList/GalleryList';


function Body(){

    let itemsArray = [
        {
            description: 'My cats',
            test: 'testy',
            color: ' red '
        },
        {
            description: 'My dogs',
            test: 'testy again',
            color: ' blue '
        }
    ]
    return(
        <div className="body">
        <p>
          <GalleryList items = {itemsArray}/>
          </p>
        </div>
    );
}

export default Body;

