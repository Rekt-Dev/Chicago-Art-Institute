import React, {useState} from 'react'




const searchBar = () => {}

const [searchInput, setSearchInput] = useState("");

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};
if (searchInput.length > 0) {
    artworks.filter(() => {
    return artwwork.name.match(searchInput);
});
}















export default SearchBar.js