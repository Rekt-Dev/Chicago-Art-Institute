import './App.css';
import './styles.css'
import './App.js'
import Entry from './components/Entry'
import emojipedia from './emojipedia';
import importer from "./components/importer"
import PlaceData from './components/placeData';

function App() {

  const jsonData = [
    {
    key:'3478', 
    subject:'Philadelphia in the 60s', 
    names:'joseph mendalovsky', 
    description:'beautiful artwork'
  }
                   ]

  const twentyArtwork = [jsonData.subject] 
  (

    <div className=''> 
          <h1>
            <span>The Art Institute of Chicago 
</span>
          </h1>
<span>
<div className='bro'>

  <input>
  
  </input>

<button className="btn btn-info"onClick={searchClicked}>search</button>

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