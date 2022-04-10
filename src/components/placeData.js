import React from 'react'
import Entry from './Entry'

function PlaceData(props){
    return(<Entry 
        key={props.id}
        subject={props.subject}
        name={props.name}
        description={props.artist}
    />
    )
    }


export default PlaceData