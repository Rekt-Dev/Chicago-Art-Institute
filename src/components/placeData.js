import React from 'react'
import Entry from './Entry'

function PlaceData(props){
    return(<Entry 
        key={props.id}
        subject={props.year}
        name={props.artworkName}
        description={props.artistName}
    />
    )
    }


export default PlaceData

// the fields we want to import for our cards : (this data is gathered after inpecting the json file recieived when requesting the basic 20 artworks)
// title           = painting title
// id             = artwork id 
// artist_titles = artist name
// fiscal_year   = year

 /* If you want to see data for just one artwork, you can use the /artworks/{id} detail endpoint. For example, here's Starry Night and the Astronauts by Alma Thomas:

https://api.artic.edu/api/v1/artworks/129884 


You can paginate through results using page and limit params:

https://api.artic.edu/api/v1/artworks?page=2&limit=100 

If you want to search and filter the results, you can do so via our search endpoints. For example, here is a full-text search for all artworks whose metadata contains some mention of cats:

https://api.artic.edu/api/v1/artworks/search?q=cats

this is the link we r gonna use for the main page to map through, it contains 4 parameters that will be displayed 

*/