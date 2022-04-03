
import React from 'react'
import App from "../App"

 const importer = fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=20').then(
    function(u){ return u.json();}
  ).then(
    function(json){
      console.log(json); 
      console.log(`this is json.data ${json.data.title}` )
    }
  )
  
export default importer