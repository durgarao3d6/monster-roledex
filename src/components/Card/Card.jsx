import React from 'react';
import './Card.css';

export default function Card(props){
    return(
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=140x140`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}