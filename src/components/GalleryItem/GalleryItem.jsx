import React from 'react';

import {useState} from 'react';

function GalleryItem( props ){
    const [ likes, setLikes ] = useState(0);
    const handleClick = ()=>{
        setLikes ( likes +1 );
    }
    return(
        <div>
            <h2>GalleryItem</h2>
            <p><button onClick={handleClick}>Like</button>Likes: { likes }</p>
            <p>Props: { JSON.stringify( props) }</p>
            <p></p>
        </div>
    );
}

export default GalleryItem;