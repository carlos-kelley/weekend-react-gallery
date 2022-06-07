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
                <img onClick={ handleClick } src={props.myItem.path}/>
                :
                <p onClick={ handleClick }>{props.myItem.description}</p>
            }
            </div>
            <p><button onClick={handleLike}>Like</button>Likes: { likes }</p>
        </div>
    );
}

export default GalleryItem;