
import React from 'react'
import App from "../App"

 export const importer = fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=20').then(
    function(u)
    { return u.json();}
  ).then(
    function(json){
      console.log(`this is bleeeeeeeeeeh ${json.data[4].artist_titles}`); 
      console.log(`this is json.data ${json.data.title}` )
      return json
    }
  )

  //let importedData=json()

  console.log(`this is importer ${importer}`)

  export const apidImage=`https://www.artic.edu/iiif/2/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
  `
  
