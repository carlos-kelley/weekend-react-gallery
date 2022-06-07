import React from 'react';
import {useState} from 'react';
import './GalleryItem.css'
import axios from 'axios';

function GalleryItem( props ){
    const [ show, setShow] = useState( true );
    const [ likes, setLikes ] = useState(0);

    const handleClick = () =>{
        setShow( !show );
    }

    const handleLike = ()=>{
        axios.put( `/gallery/like/${props.myItem.id}` ).then( ( response )=>{
            console.log( response.data );
        }).catch ( ( err )=>{
            console.log(err );
            alert( 'error adding like' );
        })
    }
    

    return(
        <div className = 'outerColumn'>
            <div  className = 'listItem'>
            {
                show?
                <img onClick={ handleClick } src={props.myItem.path}/>
                :
                <p onClick={ handleClick }>{props.myItem.description}</p>
            }
            </div>
            <button onClick={ handleLike }>Like</button>
            <p>Likes: { props.myItem.likes }</p>
        </div>
    );
}


export default GalleryItem;