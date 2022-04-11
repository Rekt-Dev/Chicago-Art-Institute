import './App.css';
import './styles.css'
import './App.js'
import Entry from './components/Entry'
import emojipedia from './emojipedia';
import importer from "./components/importer"
import PlaceData from './components/placeData';
import { apidImage } from './components/importer';

function App() {

  function handleChange(event){
    const ev=event.target.value 
    console.log(`this is ev ${event}`)
  }
  // this is a test dummyfile for logic testing purposes, this should hold the imported file from the site
  const artworkData=[]
  const jsonData = [
    {
    key:'3478', 
    subject:'Philadelphia in the 60s', 
    names:'joseph mendalovsky', 
    description:'A beautiful artwork that shows Philly at its best'
  }
                   ]

  const twentyArtwork = []

  return(

    <div className=''> 
          <h1>
            <span>The Art Institute of Chicago 
</span>
          </h1>
<span>
<div className='bro'>

  <input  type="text" name="name" placeholder="Enter your search here..." onChange={handleChange}   />
  
  

<button className="btn btn-info"onClick={searchClicked}>search</button>
<span>      <div>      </div> 

 </span>
<button className="btn btn-info"onClick={luckyClicked}>I'm feeling lucky</button>

</div>
</span>


         <dl className='dictionary'> {jsonData.map(PlaceData)}</dl>


           </div>
  ); 
}

function searchClicked(){

  console.log("search was clicked")
  return 1
}

function luckyClicked(){

  console.log("lucky was clicked")
  return 1

  //randomize an artwork.
}



  
export default App