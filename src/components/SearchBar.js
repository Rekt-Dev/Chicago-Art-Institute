import React, {useState} from 'react'




export const searchBar = () => {}
const artworks = []
const artwork = {}

function tempFuncForState(){
const [searchInput, setSearchInput] = useState("bro");

}
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};
if (searchInput.length > 0) {
    artworks.filter(() => {
    return artwork.name.match(searchInput);
});
}















