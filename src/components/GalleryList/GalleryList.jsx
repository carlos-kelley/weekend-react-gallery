import React from 'react';
import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props  ){
//template hook
const [ hook, setHook ] = useState( null )

    return(
        <div>
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