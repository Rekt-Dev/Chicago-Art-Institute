import './App.css';
import './styles.css'
import './App.js'
import Entry from './components/Entry'

const allArtwork = [] // here Im gonna need to figure a way to take the json and sort it and manipulate it according to the search requests, and according to your default requests, i.e. initial design requirements. p.s. this might be an object and not an array.


function PlaceData(artworkParam){
  return(<Entry 
      key={artworkParam.id}
      emoji={artworkParam.subject}
      name={artworkParam.name}
      description={artworkParam.arist}
  />
  )
}

function App() {

function searchClicked(){}
function luckyClicked(){}




  return (

    <div className=''> 
          <h1>
            <span>The Art Institute of Chicago 
</span>
          </h1>
<span>
<div className='bro'>

<button className="btn btn-info"onClick={searchClicked}>search</button>

<button className="btn btn-info"onClick={luckyClicked}>I'm feeling lucky</button>

</div>
</span>
{/* \\ here i am contemplating using a locally downloaded file (its a huge file)that includes all the published data by the  institute, then we can search inside of it, searches will be quicker, what r ur thoughts on this sire ? , is there an indexer to make the local searches quicker ?  */}

         <dl className='dictionary'> {allArtwork.map(PlaceData)}</dl>


           </div>
  ); 
}

export default App;
