import React from 'react';
import {useState} from 'react';
import './GalleryItem.css'

function GalleryItem( props ){
    const [ show, setShow] = useState( true );
    const [ likes, setLikes ] = useState(0);

    const handleClick = () =>{
        setShow( !show );
    }

    const handleLike = ()=>{
        setLikes ( likes +1 );
    }
    return(
        <div>
            <div  className = 'listItem'>
                {
                    show?
                    <p onClick={handleClick} className = { props.myItem.color }><strong>{ props.myItem.description }</strong></p> 
                    :
                    <p onClick={handleClick}>{ props.myItem.color } </p>
                }
            </div>
            <p>Props: { JSON.stringify( props) }</p>
            <p><button onClick={handleLike}>Like</button>Likes: { likes }</p>
        </div>
    );
}

export default GalleryItem;