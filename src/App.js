import './App.css';
import './styles.css'
import './emojipedia'
import './App.js'
import Entry from './components/Entry'
import emojipedia from './emojipedia';

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

function searchClicked(){


  // this is gonna be the huge downloaded file imo, or is it a must to access an online 3d party here by design ? 


}

  return (
    <div > 
          <h1>
            <span>The Art Institute of Chicago 
</span>
          </h1>

<div>

<button onClick={searchClicked}>search</button>

<button>I'm feeling lucky</button>

</div>

\\ here i am contemplating using a locally downloaded file (its a huge file)that includes all the published data by the  institute, then we can search inside of it, searches will be quicker, what r ur thoughts on this sire ? , is there an indexer to make the local searches quicker ? 

         <dl className='dictionary'> {allArtwork.map(PlaceData)}</dl>


           </div>
  ); 
}

export default App;
