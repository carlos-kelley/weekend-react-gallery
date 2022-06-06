import React from 'react';
import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props  ){
//template hook
const [ hook, setHook ] = useState( null )

    return(
        <div>
            <h2>GalleryList</h2>
            <p>Props: { JSON.stringify( props) }</p>

            <ul>
            {
                props.items.map( item =>(
                    <GalleryItem myItem={ item }/>
                ))
            }
            </ul>
        </div>
    );
}

export default GalleryList;