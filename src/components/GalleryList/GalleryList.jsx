import React from 'react';
import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(  ){
let itemsArray = [
    {
        description: 'My cats',
        test: 'testy'
    }
]

    return(
        <div>
            <h2>GalleryList</h2>
            {/* <GalleryItem items = { itemsArray }/> */}
            {/* <p>Props: { props }</p> */}
        </div>
    );
}

export default GalleryList;