import React from 'react';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';


function Body( props ){
    const [ itemsArray, setItemsArray ] = useState( [] );
    // Make a GET call On page load
    useEffect( ()=>{
        getItems();
    }, [] ); // empty array tells this to only run once

    const getItems=()=>{
        setItemsArray( [ {
            color:'red',
            size: 'tiny',
            description: 'drop of blood'
        }]);
    }
    return(
        <div className="body">
        <p>{JSON.stringify (props) }</p>
        <p>
          <GalleryList items = {itemsArray}/>
          </p>
        </div>
    );
}


export default Body;
