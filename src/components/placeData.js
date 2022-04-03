import React from 'react'
import Entry from './Entry'

function PlaceData(artworkParam){
    return(<Entry 
        key={artworkParam.id}
        subject={artworkParam.subject}
        name={artworkParam.name}
        description={artworkParam.arist}
    />
    )
    }


export default PlaceData