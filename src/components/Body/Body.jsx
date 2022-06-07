import React from 'react';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function Body( props ){
    const [ itemsArray, setItemsArray ] = useState( [] );
    // Make a GET call On page load
    useEffect( ()=>{
        getItems();
    }, [] );  

    const getItems = () => {
        axios.get( '/gallery' ).then( (response )=>{
            console.log( response.data );
            setItemsArray( response.data );
        }).catch( ( err )=>{
            console.log ( err );
            alert( 'error getting gallery' );
        })
    }
        
    
    return(
        <div className="body">
        <p>
          <GalleryList items = {itemsArray}/>
          </p>
        </div>
    );
}


export default Body;
